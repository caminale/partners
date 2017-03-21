import {Meteor} from 'meteor/meteor';

import {Posts} from '../../lib/collections';

export default {
  'addPost': (conversationId, message) => {
    const user = Meteor.user();
    if(!user) {
      return;
    }

    Posts.insert({
      conversationId,
      message,
      author: user.username,
      submitDate: new Date(),
    });
  }
};
