import {Meteor} from 'meteor/meteor';

import {UserExoStats} from '../../lib/collections';

import calculLevel from './calculLevel';

export default {

  addUserExoStats: p_userExoStats => {
    const user = Meteor.user();
  console.log(p_userExoStats)
    if (!user) {
      return;
    }
    UserExoStats.insert({
      exerciseId: p_userExoStats.exerciseId,
      userId: user._id,
      weight: p_userExoStats.weight,
      reps: p_userExoStats.reps,
    });
  calculLevel(p_userExoStats.exerciseId,p_userExoStats.weight,p_userExoStats.reps);
  }
};
