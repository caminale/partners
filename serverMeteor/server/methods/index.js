import {Meteor} from 'meteor/meteor';

import chatsMethods from './chats';
import postsMethods from './posts';
import updateProfileMethods from './updateProfile';
import userExoStats from './userExoStats';
import exoMethods from './exercice';
import addPartners from './addPartners';
import addOneSignalId from './addOneSIgnalId';
import removeUser from './removeUser';
import addRating from './rating';


Meteor.methods({
  ...chatsMethods,
  ...postsMethods,
  ...updateProfileMethods,
  ...userExoStats,
  ...exoMethods,
  ...addPartners,
  ...addOneSignalId,
  ...removeUser,
  ...addRating,
});
