import {Meteor} from 'meteor/meteor';

export default {
  removeUser: p_userId => {
    const user = Meteor.user();
    Meteor.users.update({_id: user._id}, {
      $push: {
        removeUser: p_userId
      }
    }, error => {
      if (error) {
        throw new Meteor.Error(500, error.message);
      } else {
        console.log("remove user Successful");
      }
    });
  }
}