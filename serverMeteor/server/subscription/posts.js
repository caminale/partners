import {Meteor} from 'meteor/meteor';
import {Posts, Conversations} from '../../lib/collections';

Meteor.publish('posts', conversationId => {
  return Posts.find({'conversationId': conversationId},
    {limit: 20, sort: {submitDate: +1}});
});


