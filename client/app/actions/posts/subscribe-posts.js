import Meteor from 'react-native-meteor';

export default conversationId => {
  Meteor.subscribe('posts', conversationId);
};
