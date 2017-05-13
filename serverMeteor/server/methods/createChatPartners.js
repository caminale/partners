import {Chats} from '../../lib/collections';

  /**
   * @summary Meteor.methods addChat permit to insert in the collection chats :
   * title, description, creationDate, users, lastpost
   * @isMethod true
   * @locus Anywhere
   * @param  {Object}  chat is an object of the collection chats
   */

 const createChatPartners= (p_partnerId)  => {
    const userId = Meteor.user()._id;
    const partner = Meteor.users.findOne({_id: p_partnerId});
    if (!userId) {
      return;
    }

    Chats.insert({
      title: 'new conversation',
      description: 'yolo',
      creationDate: new Date(),
      users: [p_partnerId,userId],
      lastPost: new Date()
    });
  }

  export default createChatPartners;
