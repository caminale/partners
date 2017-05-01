import {Meteor} from 'meteor/meteor';

import {UserExoStats} from '../../lib/collections';

const calculLevelUser = () => {

  const userId = Meteor.user()._id;
  let levelLatPullDown = 0;
  let levelDips = 0;
  let levelSquats = 0;
  let levelBenchPress = 0;
  let levelU = 0.0;

  let benchPress = UserExoStats.findOne({
    userId: userId,
    exerciseId: 'n5iCkhmR5ADkZPbNs'
  });
  levelBenchPress = parseFloat(benchPress.levelExo);

  let squats = UserExoStats.findOne({
    userId: userId,
    exerciseId: 'Z2asvxEdRRBWbanM8'
  });
  levelSquats = parseFloat(squats.levelExo);

  let dips = UserExoStats.findOne({
    userId: userId,
    exerciseId: '4AMqjmCqkhADgjmrS'
  });
  levelDips = parseFloat(dips.levelExo);

  let latPullDown = UserExoStats.findOne({
    userId: userId,
    exerciseId: 'CrzMaxQ4qKLWZHKLa'
  });
  levelLatPullDown = parseFloat(latPullDown.levelExo);

  levelU = (levelBenchPress + levelSquats + levelDips + levelLatPullDown) / 4;

  // console.log("dips :" + levelDips);
  // console.log("squats : " + levelSquats);
  // console.log("bp :" + levelBenchPress);
  // console.log("lpd : " + levelLatPullDown);
  // console.log("total level " + levelUser);

let levelUser= levelU.toFixed(2);

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

