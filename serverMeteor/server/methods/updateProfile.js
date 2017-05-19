import {Meteor} from 'meteor/meteor';

import calculLevelUser from './calculLevelUser';

export default {

  updateProfile: profile => {
    const user = Meteor.user();

    console.log(profile.trainingTime)
    Meteor.users.update({_id: user._id}, {
      $set: {
        "profile.firstName": profile.firstName,
        "profile.age": profile.age,
        "profile.weight": profile.weight,
        "profile.height": profile.height,
        "profile.completeProfile": true,
        "profile.trainingTime": profile.trainingTime,
      },
      $push: {
        partners: '',
        removeUser: '',
        request:'',
        requestReceive:''
      }
    }, error => {
      if (error) {
        throw new Meteor.Error(500, error.message);
      } else {
        console.log("Update profile Successful");
      }
    });
    calculLevelUser();
  },

  updateDescription: p_description => {

    const userId = Meteor.user()._id;
    Meteor.users.update({_id: userId}, {
      $set: {
        "profile.description": p_description
      }
    }, error => {
      if (error) {
        throw new Meteor.Error(500, error.message);
      } else {
        console.log("Update description Successful");
      }
    });
  },

  updateweight: p_weight => {

    const userId = Meteor.user()._id;

    console.log(p_weight);

    Meteor.users.update({_id: userId}, {
      $set: {
        "profile.weight": p_weight
      }
    }, error => {
      if (error) {
        throw new Meteor.Error(500, error.message);
      } else {
        console.log("Update weight Successful");
      }
    });
  },
  updateTrainingTime: p_trainingTime => {

    const userId = Meteor.user()._id;

    console.log(p_trainingTime);

    Meteor.users.update({_id: userId}, {
      $set: {
        "profile.trainingTime": p_trainingTime
      }
    }, error => {
      if (error) {
        throw new Meteor.Error(500, error.message);
      } else {
        console.log("Update trainingtime Successful");
      }
    });
  },

  addProfilePicture: p_picture => {

    const userId = Meteor.user()._id;
    Meteor.users.update({_id: userId}, {
      $set: {
        "profile.picture": p_picture
      }
    }, error => {
      if (error) {
        throw new Meteor.Error(500, error.message);
      } else {
        console.log("add a profile picture");
      }
    });
  }
};
