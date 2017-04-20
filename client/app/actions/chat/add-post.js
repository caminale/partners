import Meteor from 'react-native-meteor';

export default post => {
  Meteor.call('addPost', post);
};
