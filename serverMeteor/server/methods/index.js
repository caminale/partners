import {Meteor} from 'meteor/meteor';

import chatsMethods from './chats';
import postsMethods from './posts';
import statsBeginner from './statsBeginner';
import statsExpert from './statsBeginner';

Meteor.methods({
  ...chatsMethods,
  ...postsMethods,
  ...statsBeginner,
  ...statsExpert
});
