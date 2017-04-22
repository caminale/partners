import {Meteor} from 'meteor/meteor';

import {StatsExpert} from '../../lib/collections';

export default {
  addStats: stats => {
    console.log("juju"+stats);
    const user= Meteor.user();

    StatsExpert.insert({
      level: stats.level,
      user: stats.user._id,
      benchPress: stats.benchPress,
      squats: stats.squats,
      deadLift: stats.deadLift
    });
  },

};
