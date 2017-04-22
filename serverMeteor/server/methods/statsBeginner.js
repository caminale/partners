import {Meteor} from 'meteor/meteor';

import {StatsBeginner} from '../../lib/collections';


export default {

  addStats: stats => {
    const  user = Meteor.user();

    if (!user) {
      return;
    }
    console.log("juju"+stats.level);
    StatsBeginner.insert({
      pushup: stats.pushup,
      pullup: stats.pullup,
      level: stats.level,
      user: user._id
    });
  }
};
