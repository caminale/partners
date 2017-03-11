'use strict';
const mongoose = require('mongoose');
// eslint-disable-next-line import/no-unassigned-import
require('mongoose-type-email');
const Promise = require('bluebird');

const Schema = mongoose.Schema;
const self = process.env.SERVER_IP;

// eslint-disable-next-line new-cap
const userSchema = new Schema({
  email: {type: String, required: true, unique: true},
  pseudo: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  token: {type: String}
});

const Model = mongoose.model('User', userSchema);

module.exports = {
  schema: userSchema,
  model: Model,
  registry: {
    urlTemplates: {
      self: `${self}/api/users/{id}`,
      relationship: `${self}/api/users/{ownerId}/relationships/{path}`
    }
  },
  actions: {
    login(email, password, token) {
      return Model.findOneAndUpdate({email, password}, {token}).exec();
    },
    register(email, pseudo, password, token) {
      return Model.findOne({email})
        .then(user => {
          if (!user) {
            const newUser = new Model({
              email,
              pseudo,
              password,
              token
            });
            return newUser.save();
          }
          return Promise.reject('Email already taken');
        });
    },
    getUserByToken(token, newToken) {
      return Model
        .findOneAndUpdate({token}, {token: newToken}, {new: true})
        .exec();
    }
  }
};
