import {Conversations} from '../../lib/collections';

export default {
  'addConversation': (title, description) => {
    console.log('Add conversation');
    console.log(`${title}, ${description}`);

    Conversations.insert({
      title,
      description,
      creationDate: new Date()})
  }
};
