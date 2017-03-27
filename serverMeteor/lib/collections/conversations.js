import {Mongo} from 'meteor/mongo';
import {SimpleSchema} from 'meteor/aldeed:simple-schema';

const ConversationSchema = new SimpleSchema({
  title: {
    type: String,
    max: 100
  },
  description: {
    type: String,
    max: 250
  },
  creationDate: {
    type: Date
  }
});

const Conversations = new Mongo.Collection('conversations');
Conversations.attachSchema(ConversationSchema);

export default Conversations;
