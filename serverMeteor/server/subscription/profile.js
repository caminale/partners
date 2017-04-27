import {Meteor} from 'meteor/meteor';
import {Accounts} from '../../lib/collections';

Meteor.publish('accounts', userId => {
  return Accounts.find({_id: userId});
});
