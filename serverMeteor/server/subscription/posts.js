import {Meteor} from 'meteor/meteor';
import {Posts} from '../../lib/collections';

Meteor.publish('posts', function(conversationId) {
  return Posts.find({
    conversationId
  });
});
