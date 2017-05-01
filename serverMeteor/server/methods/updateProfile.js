import {Meteor} from 'meteor/meteor';

import calculLevelUser from './calculLevelUser';

export default {

  updateProfile: profile => {
    const user = Meteor.user();


    Meteor.users.update({_id :user._id}, {
      $set: {
            "profile.firstName": profile.firstName,
            "profile.age": profile.age,
            "profile.weight": profile.weight,
            "profile.height": profile.height,
            "profile.completeProfile": true,
          }
    }, error => {
      if (error) {
        throw new Meteor.Error(500, error.message);
      } else {
        console.log("Update Successful");
      }
    });
    calculLevelUser();
  }

};
