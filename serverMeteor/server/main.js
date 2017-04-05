import {Meteor} from 'meteor/meteor';

import {FacebookOAuthInit} from './startups';

import './methods';
import './subscription';

Meteor.startup(() => {
  // Code to run on server at startup
  FacebookOAuthInit();
});
