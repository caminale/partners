import {Meteor} from 'meteor/meteor';
import {Conversations} from '../../lib/collections';

Meteor.publish('conversations', function() {
  return Conversations.find({});
});
