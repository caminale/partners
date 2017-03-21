import {Conversations} from '../../lib/collections';

export default {
  'addConversations': (title, description) => {
    Conversations.insert({
      title,
      description,
      creationDate: new Date()})
  }
};
