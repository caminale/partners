import {Meteor} from 'meteor/meteor';
import {Posts, Conversations} from '../../lib/collections';

Meteor.publish('posts', conversationId => {
  // Const conversation = Conversations.find({id: conversationId});
  return Posts.find({}, {limit: 20});
  // Return Posts.find({author: conversation.users}, {limit: 20});
});
