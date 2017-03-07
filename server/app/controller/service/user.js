'use strict';
// eslint-disable-next-line new-cap
const router = require('express').Router();
const bodyParser = require('body-parser');

const parseUrl = bodyParser.json();
// var parseJson = bodyParser.json({ type: 'application/*+json' });

module.exports = auth => {
  router.post('/login', parseUrl, auth.authenticate);

  router.post('/authenticate', parseUrl, auth.isAuthenticated, (req, res) => {
    res.status(200).send({
      accountId: req.user.id,
      accessToken: req.user.token
    });
  });

  router.post('/register', parseUrl, auth.register, (req, res) => {
    res.status(200).send({
      accountId: req.user.id,
      accessToken: req.user.token
    });
  });

  router.post('/logout', parseUrl, auth.isAuthenticated, (req, res) => {
    req.user.token = undefined;
    req.user.save();
    res.status(200).end();
  });

  return router;
};
