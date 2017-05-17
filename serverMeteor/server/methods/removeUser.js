import {Meteor} from 'meteor/meteor';

export default {

  removeUser: p_userId => {

    const user = Meteor.user();
    const flag = Meteor.users.find({$and: [{_id : this.userId},{requestReceive: {$in:p_userId }}]})
    console.log('yolo'+flag.length);
    //to know if the user added u or not, permit to decrement his notif,
    //the request field, requestReceive ...

      Meteor.users.update({_id: user._id,requestReceive:p_userId}, {
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
      Meteor.users.update({_id: p_userId,request :user._id}, {
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
      Meteor.users.update({_id: p_userId}, {
        $push: {
          removeUser: user._id
        }
      }, error => {
        if (error) {
          throw new Meteor.Error(500, error.message);
        } else {
          console.log("remove foreign User side successs");
        }
      });


  }

}