const jwt = require('jsonwebtoken');
const Promise = require('bluebird');
const dbUsers = require('../model/users');

const verify = Promise.promisify(jwt.verify);

module.exports = {
  authenticate(req, res) {
    const token = jwt.sign({data: req.body}, process.env.TOKEN_SECRET,
      {expiresIn: process.env.TOKEN_EXPIRES});
    dbUsers.actions.login(req.body.email, req.body.password, token)
      .then(doc => {
        if (doc) {
          res.status(200).send({
            accountId: doc.id,
            accessToken: token
          });
        } else {
          res.status(400).send({error: 'Wrong credentials'});
        }
      }).catch(err => res.status(400).send({error: err}));
  },
  isAuthenticated(req, res, next) {
    verify(req.body.token, process.env.TOKEN_SECRET)
      .then(decoded => {
        const newToken = jwt
          .sign({data: decoded.data}, process.env.TOKEN_SECRET,
          {expiresIn: process.env.TOKEN_EXPIRES});
        return dbUsers.actions.getUserByToken(req.body.token, newToken);
      })
      .then(doc => {
        if (doc) {
          req.user = doc;
          next();
        } else {
          res.status(401).send({error: 'Wrong token'});
        }
      })
      .catch(err => {
        res.status(401).send({error: err});
      });
  },
  register(req, res, next) {
    const {email, pseudo, password} = req.body;
    const token = jwt.sign({data: req.body}, process.env.TOKEN_SECRET,
      {expiresIn: process.env.TOKEN_EXPIRES});
    dbUsers.actions.register(email, pseudo, password, token)
      .then(user => {
        req.user = user;
        next();
      })
      .catch(err => {
        res.status(401).send({error: err});
      });
  }
};
