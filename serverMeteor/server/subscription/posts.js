import {Meteor} from 'meteor/meteor';
import {Posts} from '../../lib/collections';

Meteor.publish('posts', conversationId => {
  return Posts.find({});
});
