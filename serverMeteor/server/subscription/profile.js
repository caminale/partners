import {Meteor} from 'meteor/meteor';
import {Accounts} from '../../lib/collections';

Meteor.publish('accounts',level => {
  return Meteor.users.find({profile:{level: level }});
});
