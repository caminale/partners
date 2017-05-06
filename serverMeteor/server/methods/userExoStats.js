import {Meteor} from 'meteor/meteor';

import {UserExoStats} from '../../lib/collections';

import calculLevelExo from './calculLevelExo';

export default {

  addUserExoStats: p_userExoStats => {

    const user = Meteor.user();


    if (!user) {
      return;
    }
    UserExoStats.insert({
      exerciseId: p_userExoStats.exerciseId,
      userId: user._id,
      weight: [p_userExoStats.weight],
      reps: [p_userExoStats.reps],
      date: [new Date()]
    });
  calculLevelExo(p_userExoStats.exerciseId,[p_userExoStats.weight],[p_userExoStats.reps]);
  },

  updateWeight: p_stats => {

    const userId = Meteor.user()._id;

    UserExoStats.update({userId: userId,exerciseId: p_stats.exerciseId}, {
      $push: {
        weight: p_stats.weight,
        date: new Date()
      }
    }, error => {
      if (error) {
        throw new Meteor.Error(500, error.message);
      } else {
        console.log("Update weight exo Successful");
      }
    });
    calculLevelExo(p_stats.exerciseId,[p_stats.weight],[p_stats.reps]);
  },
  updateReps: p_reps => {

    const userId = Meteor.user()._id;

    UserExoStats.update({userId: userId,exerciseId: p_reps.exerciseId}, {
      $push: {
        reps: p_reps.reps,
        date: new Date()
      }
    }, error => {
      if (error) {
        throw new Meteor.Error(500, error.message);
      } else {
        console.log("Update reps exo Successful");
      }
    });
    calculLevelExo(p_reps.exerciseId,[p_reps.weight],[p_reps.reps]);
  }
};
