import {Meteor} from 'meteor/meteor';

import chatsMethods from './chats';
import postsMethods from './posts';
import updateProfileMethods from './updateProfile';
import userExoStats from './userExoStats';
import exoMethods from './exercice'

Meteor.methods({
  ...chatsMethods,
  ...postsMethods,
  ...updateProfileMethods,
  ...userExoStats,
  ...exoMethods
});
