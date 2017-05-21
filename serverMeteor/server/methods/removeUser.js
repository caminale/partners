import {Meteor} from 'meteor/meteor';

export default {

  removeUser: p_userId => {

    const user = Meteor.user();

    findRequestReceived = (p_requestReceived) => {
      if (p_requestReceived === p_userId) {
        return p_requestReceived;
      }
      else {
        return undefined
      }
    };

    returnBoolRequestReceived = () => {

      const tab_requestReceive = Meteor.user().requestReceive;
      let b_requestReceived = false;
      //test if the database is connected.
      if (tab_requestReceive !== undefined) {
        //the function.find permit to find the foreignId in the requestReceived
        // Array in the current user
        if (tab_requestReceive.find(this.findRequestReceived) !== undefined) {
          b_requestReceived = true;
        }
      }
      return b_requestReceived;
    };

    if (this.returnBoolRequestReceived() === true) {
      Meteor.users.update({_id: user._id, requestReceive: p_userId}, {
        $push: {
          removeUser: p_userId
        },
        $pull: {
          requestReceive: {$in: [p_userId]}
        },
        $inc: {
          notifications: -1
        }
      }, error => {
        if (error) {
          throw new Meteor.Error(500, error.message);
        } else {
          console.log("remove user Successful");
        }
      });
      Meteor.users.update({_id: p_userId, request: user._id}, {
        $pull: {
          request: {$in: [user._id]}
        },
        $push: {
          removeUser: user._id
        },
      }, {multi: true}, error => {
        if (error) {
          throw new Meteor.Error(500, error.message);
        } else {
          console.log("remove foreign User side successs");
        }
      });
    }
    else {
      Meteor.users.update({_id: user._id}, {
        $push: {
          removeUser: p_userId
        }
      }, error => {
        if (error) {
          throw new Meteor.Error(500, error.message);
        } else {
          console.log("remove user without notif Successful");
        }
      });
      Meteor.users.update({_id: p_userId}, {
        $push: {
          removeUser: user._id
        }
      }, error => {
        if (error) {
          throw new Meteor.Error(500, error.message);
        } else {
          console.log("remove foreign User  without notif side successs");
        }
      });
    }
  }

}