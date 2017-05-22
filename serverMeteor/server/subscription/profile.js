import {Meteor} from 'meteor/meteor';


  Meteor.publish('users', userId => {
    return Meteor.users.find({_id: userId});
  });

