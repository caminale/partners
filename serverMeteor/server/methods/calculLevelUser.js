import {Meteor} from 'meteor/meteor';

import {UserExoStats, Exercise} from '../../lib/collections';

const calculLevelUser = () => {

  const userId = Meteor.user()._id;

  const exercises = Exercise.find({matching: true}).fetch();
  const sumCoeff = exercises.reduce((acc, obj) => acc + obj.difficulty, 0);

  const levelUser = exercises
    .map(exercise => { // exercise
      const statExo = UserExoStats.findOne({
        userId,
        exerciseId: exercise._id
      }).levelExo;
      return parseFloat(statExo) * exercise.difficulty;
    })
    .reduce((acc, obj) => acc + (obj / sumCoeff), 0)
    //The reduce(fuction,0 ) method reduces the array to a single value.
    .toFixed(2);

  Meteor.users.update(userId, {
    $set: {
      "profile.level": levelUser
    }
  }, error => {
    if (error) {
      throw new Meteor.Error(500, error.message);
    } else {
      console.log("Update level Successful");
    }
  });

};

export default calculLevelUser;
