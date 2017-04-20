import {Mongo} from 'meteor/mongo';
import {SimpleSchema} from 'meteor/aldeed:simple-schema';

const PostSchema = new SimpleSchema({
  message: {
    type: String,
    max: 1000
  },
  author: {
    type: String
  },
  submitDate: {
    type: Date
  },
  conversationId: {
    type: String
  }
});

/**
 * @summary  Collection posts for a chat, if you need to subscribe it with in
 * argument :

  - **`'String'`**: conversationId
 * @locus Anywhere
 * @memberOf Mongo.Collection
 *  @param {String} message  permit to stock the message sent from users
 *  @param {String} author   permit to return the user._id
 *  @param {Date}   submitDate permit to save the date when users sent   msg
 *  @param {String} conversationId to know which conversation
 **/

const Posts = new Mongo.Collection('posts');

Posts.attachSchema(PostSchema);

export default Posts;
