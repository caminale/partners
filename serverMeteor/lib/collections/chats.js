import {Mongo} from 'meteor/mongo';
import {SimpleSchema} from 'meteor/aldeed:simple-schema';

const ChatsSchema = new SimpleSchema({
  title: {
    type: String,
    max: 100
  },
  description: {
    type: String,
    max: 250
  },
  creationDate: {
    type: Date
  },
  users: {
    type: [String]
  },
  lastPost: {
    type: Date
  }
});

/**
 * @summary  Collection chats room of conversations, you need to subscribe it
 * with in argument :

 - **`'String'`**: id of the user (Meteor.user()._id)
 * @locus Anywhere
 * @memberOf Mongo.Collection
 *  @param {String} title  title of the conversation
 *  @param {String} description of the conversation
 *  @param {Array} users (array of String)
 *  permit to have the id of the users chat
 *  @param {Date} lastpost know the lastpost for load only the last post
 *  and not all the conversation

 **/

const Chats = new Mongo.Collection('chats');

Chats.attachSchema(ChatsSchema);

export default Chats;
