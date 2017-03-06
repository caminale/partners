'use strict';
const UsersInit = require('./users').init;

const db = {
  init() {
    // To populate the database in order to test
    return UsersInit() // eslint-disable-line new-cap
      .then(() => {
        console.log('Users saved successfully');
      })
      .catch(err => {
        console.log(err);
      });
  }
};

module.exports = db;
