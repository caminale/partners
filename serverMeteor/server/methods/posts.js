import {Meteor} from 'meteor/meteor';

import {Posts} from '../../lib/collections';

export default {
  /**
   * @summary Meteor.methods addPost permit to insert in the collection posts :
   * conversationId, message, author, submitDate
   * @isMethod true
   * @locus Anywhere
   * @param  {Object} post is an object of the collection posts
   */
  addPost: post => {
    const user = Meteor.user();

    if (!user) {
      return;
    }

    console.log(user);
    Posts.insert({
      conversationId: post.conversationId,
      message: post.message,
      author: user._id,
      submitDate: new Date()
    });
  }
};
