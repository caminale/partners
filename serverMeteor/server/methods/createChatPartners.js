import {Chats} from '../../lib/collections';


  /**
   * @summary Meteor.methods addChat permit to insert in the collection chats :
   * title, description, creationDate, users, lastpost
   * @isMethod true
   * @locus Anywhere
   * @param  {Object}  chat is an object of the collection chats
   */

 const createChatPartners= (chat)  => {
    const userId = Meteor.user()._id;

    if (!userId) {
      return;
    }

console.log('yopoooooooooooooooooooolooooooooooooo');
    Chats.insert({
      title: 'chifumi',
      description: 'yolo',
      creationDate: new Date(),
      users: [chat,userId],
      lastPost: new Date()
    });
  }

  export default createChatPartners;
