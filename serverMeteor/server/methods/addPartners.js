import {Meteor} from 'meteor/meteor';
import createPartner from './createPartner';

export default {

  sendAddPartner: p_partnerId => {
    const user = Meteor.user();
    //update the accounts of the user who send the demand of partners

    //we test if the user receive before an invitation of partners
    //if he had he can add the user beacause it will create another conversation
    findRequestReceived = (p_requestReceived) => {
      if (p_requestReceived === p_partnerId) {
        console.log(p_requestReceived);

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
          console.log(tab_requestReceive.find(this.findRequestReceived));
        }
      }
      console.log(b_requestReceived);
      return b_requestReceived;
    };
    if (returnBoolRequestReceived() !== true) {
      console.log('ca rentre ?');
      Meteor.users.update({_id: user._id}, {
        $push: {
          request: p_partnerId
        }
      }, error => {
        if (error) {
          throw new Meteor.Error(500, error.message);
        } else {
          console.log("send an add partner Successful");
        }
      });
      //update collection of the user who receive the notification increment notif
      //and enter partnerid in the tab requestReceive
      Meteor.users.update({_id: p_partnerId}, {
        $push: {
          requestReceive: user._id
        },
        $inc: {
          notifications: +1
        }
      }, error => {
        if (error) {
          throw new Meteor.Error(500, error.message);
        } else {
          console.log("send an add partner Successful");
        }
      });
    }

  },
  //user who received the notification know if he accepts or refuse
  //decrement his notification
  //modiffication of user who receive the request

  answerAddPartner: p_partnerId => {

    const user = Meteor.user();
    Meteor.users.update({_id: user._id}, {
      $pull: {
        requestReceive: {$in: [p_partnerId]}
      },
    }, {multi: true}, error => {
      if (error) {
        throw new Meteor.Error(500, error.message);
      } else {
        console.log("add partners Successful");
      }
    });

    Meteor.users.update({_id: user._id}, {
      $inc: {
        notifications: -1
      }
    }, error => {
      if (error) {
        throw new Meteor.Error(500, error.message);
      } else {
        console.log("");
      }
    });

    // modiffication of user who sent the request
    Meteor.users.update({_id: p_partnerId}, {
      $pull: {
        request: {$in: [user._id]}
      },
    }, {multi: true}, error => {
      if (error) {
        throw new Meteor.Error(500, error.message);
      } else {
        console.log("add partners Successful");
      }
    });
    createPartner(p_partnerId);
  }
}

