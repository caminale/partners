import {Meteor} from 'meteor/meteor';
import {Accounts} from '../../lib/collections';

Meteor.publish('users', userId => {

  console.log(Meteor.users.find({'profile.firstName': { $ne: 'lolo '}}));
  return Meteor.users.find({
    _id: { $ne: this.userId }},{limit: 20, sort: {level: -1}});
});
