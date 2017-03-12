import Meteor from 'react-native-meteor';

const login = creds => {
  return new Promise((resolve, reject) => {
    Meteor.loginWithPassword(creds.email, creds.password, err => {
      if (err) {
        reject(err);
      }
      resolve();
    });
  });
};

export default login;
