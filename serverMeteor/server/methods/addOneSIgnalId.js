import {Meteor} from 'meteor/meteor';

export default {

  addId: p_oneSignal => {

      Meteor.users.update({_id: p_oneSignal.userId}, {
        $set: {
          oneSignalId: p_oneSignal.deviceId
        }
      });

  }
}
