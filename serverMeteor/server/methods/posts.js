import {Meteor} from 'meteor/meteor';

import {Posts} from '../../lib/collections';

export default {
  'addPost': (conversationId, message) => {
    console.log('Add posts');
    const user = Meteor.user();
    console.log(user);
    if(!user) {
      return;
    }

    Posts.insert({
      conversationId,
      message,
      author: user._id,
      submitDate: new Date(),
    });
  }
};
