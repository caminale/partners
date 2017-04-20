import {Chats} from '../../lib/collections';

export default {
  /**
   * @summary Meteor.methods addChat permit to insert in the collection chats :
   * title, description, creationDate, users, lastpost
   * @isMethod true
   * @locus Anywhere
   * @param  {Object}  chat is an object of the collection chats
   */
  addChat: chat => {
    const userId = Meteor.user()._id;

    if (!userId) {
      return;
    }

    Chats.insert({
      title: chat.title,
      description: chat.description,
      creationDate: new Date(),
      users: chat.users,
      lastPost: new Date()
    });
  }
};
