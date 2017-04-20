import {Meteor} from 'meteor/meteor';
import {Chats} from '../../lib/collections';

Meteor.publish('chats', userId => {
  return Chats.find({users: userId}, {limit: 20, sort: {lastPost: -1}});
});
