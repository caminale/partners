import {Mongo} from 'meteor/mongo';
import {SimpleSchema} from 'meteor/aldeed:simple-schema';


Schema = {};

Schema.UserProfile = new SimpleSchema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  gender: {
    type: String,
    allowedValues: ['male', 'female'],
    optional: true
  },
  locale: {
    type: String
  },
  age: {
    type: Number
  },
});

const AccountSchema = new SimpleSchema({
  _id: {
    type: String,
    regEx: SimpleSchema.RegEx.Id
  },
  username: {
    type: String,
    regEx: /^[a-z0-9A-Z_]{3,15}$/
  },
  emails: {
    optional: false,
    type: [Object],
  },
  "emails.$.address": {
    optional: false,
    type: String,
    regEx: SimpleSchema.RegEx.Email
  },
  "emails.$.verified": {
    optional: true,
    type: Boolean
  },
  createdAt: {
    type: Date
  },
  profile: {
    type: Schema.UserProfile,
    optional: true
  },
  services: {
    type: Object,
    optional: true,
    blackbox: true
  },
  roles: {
    type: String,
    optional: true,
    blackbox: true,
    allowedValues: ['user', 'admin']
  }
});

/**
 * @summary  Collection user
 * @locus Anywhere
 * @memberOf Mongo.Collection
 *  @param {String} _id  id of users
 *  @param {String} username
 *  @param {String} emails
 *  @param {String} conversationId to know which conversation
 *  @param {String} createdAt Date when users registration
 *  @param {Object} services for the moment nothing
 *  @param {String} roles to know if users is admin or a simple user
 *  @param {Object} profile type schema profile :
 - **`'String'`**: firstName
 - **`'String'`**: lastName
 - **`'String'`**: gender (allowedValues : male or female)
 - **`'String'`**: locale (user come from)
 - **`'Number'`**: age
 **/

const Accounts = new Mongo.Collection('accounts');

Accounts.attachSchema(AccountSchema);

export default Accounts;
