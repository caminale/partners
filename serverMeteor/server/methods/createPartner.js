import createChatPartners from './createChatPartners';

import {Meteor} from 'meteor/meteor';


const createPartner = (p_partnerId) => {

  const userId = Meteor.user()._id;


  Meteor.users.update(userId, {
    $push: {
      "partners.partners": p_partnerId,
    }
  }, error => {
    if (error) {
      throw new Meteor.Error(500, error.message);
    } else {
      console.log("add final partner Successful");
    }
  });
  Meteor.users.update(p_partnerId, {
    $push: {
      "partners.partners": userId,
    }
  }, error => {
    if (error) {
      throw new Meteor.Error(500, error.message);
    } else {
      console.log("add final partner Successful");
    }
  });
  createChatPartners(p_partnerId);
};

export default createPartner;