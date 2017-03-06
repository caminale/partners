const Promise = require('bluebird');
const User = require('./../model/users').model;

User.findOne = Promise.promisify(User.findOne);

const initUsers = {
  init() {
    return User.findOne({email: 'Admin'})
      .then(user => {
        if (!user) {
          const admin = new User({
            email: 'Admin',
            pseudo: 'SuperAdmin',
            password: 'admin'
          });
          return admin.save();
        }
        return Promise.reject('DB already initialised');
      });
  }
};

module.exports = initUsers;
