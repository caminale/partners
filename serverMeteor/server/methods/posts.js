import {Meteor} from 'meteor/meteor';

import {Posts} from '../../lib/collections';

export default {
  addPost: (conversationId, message) => {
    console.log('Add posts');
    const user = Meteor.user();
    console.log(user);
    if (!user) {
      return;
    }
    console.log(user.username);
    Posts.insert({
      conversationId,
      message,
      author: user.username,
      submitDate: new Date()
    });
  }
};
