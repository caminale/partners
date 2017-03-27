import {Meteor} from 'meteor/meteor';

import conversationsMethods from './conversations';
import postsMethods from './posts';

Meteor.methods({
  ...conversationsMethods,
  ...postsMethods
});
