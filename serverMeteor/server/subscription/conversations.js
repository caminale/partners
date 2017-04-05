import {Meteor} from 'meteor/meteor';
import {Conversations} from '../../lib/collections';

Meteor.publish('conversations', () => {
  return Conversations.find({});
});
