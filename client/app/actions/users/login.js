import Meteor from 'react-native-meteor';

const login = creds => {
  Meteor.loginWithPassword(creds.email, creds.password, (error) => {
    if (error) {
      console.log(error);
    }
    console.log('Logged');
  });
};

export default login;
