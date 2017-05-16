import {Meteor} from 'meteor/meteor';
import {UserExoStats} from '../../lib/collections';

Meteor.publish('stats', function statsPublication() {
  return UserExoStats.find();
});
