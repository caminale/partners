import {Mongo} from 'meteor/mongo';
import {SimpleSchema} from 'meteor/aldeed:simple-schema';


Schema = {};

Schema.UserProfile = new SimpleSchema({
  firstName: {
    type: String,
    optional: true,
  },
  lastName: {
    type: String,
    optional: true
  },
  gender: {
    type: String,
    allowedValues: ['male', 'female'],
    optional: true,
  },
  locale: {
    type: String,
    optional: true,
  },
  age: {
    type: Number,
    optional: true,
  },
  picture: {
    type: String,
    optional: true,
  },
  weight: {
    type: [Number],
    optional: true,
  },
  height: {
    type: Number,
    optional: true,
  },

  completeProfile: {
    type: Boolean,
    optional: true,
  },
  description: {
    type: String,
    optional: true,
  },
  trainingTime: {
    type: String,
    optional: true
  },
  mark: {
    type: Number,
    optional: true,
  }
});
// Schema.Matching = new SimpleSchema({
//   partners:{
//     type: [String],
//     optional: true
//   },
//   request:{
//     type: [String],
//     optional: true
//   },
//   requestReceive:{
//     type: [String],
//     optional: true
//   }
// });


const AccountSchema = new SimpleSchema({
  _id: {
    type: String,
    regEx: SimpleSchema.RegEx.Id
  },
  username: {
    type: String,
    optional: true,
    // regEx: /^[a-z0-9A-Z_]{3,15}$/,
  },

  emails: {
    optional: true,
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
    allowedValues: ['user', 'admin']
  },
  partners: {
    type: [String],
    optional: true
  },
  level: {
    type: Number,
    optional: true,
  },
  notifications: {
    type : Number,
    optional: true
  },
  oneSignalId: {
    type : String,
    optional: true
  },
  request: {
    type: [String],
    optional: true
  },
  requestReceive: {
    type: [String],
    optional: true
  },
  removeUser: {
    type: [String],
    optional: true
  },
  rating: {
    optional: true,
    type: [Object],
  },
  "rating.$.mark": {
    optional: true,
    type: String,
  },
  "rating.$.complete": {
    optional: true,
    type: Boolean
  },
  "rating.$.opinion": {
    optional: true,
    type: String,
  },
  "rating.$.userId": {
    optional: true,
    type: String
  },
  ratesNumber: {
    optional: true,
    type: Number
  },

  averageStarRating: {
    optional: true,
    type: String
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
