import {Meteor} from 'meteor/meteor';

import chatsMethods from './chats';
import postsMethods from './posts';

Meteor.methods({
  ...chatsMethods,
  ...postsMethods
});
