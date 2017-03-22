import Meteor from 'react-native-meteor';

const forgot = creds => {
  return new Promise((resolve, reject) => {
    Meteor.forgotPassword(creds.email, err => {
      if (err) {
        reject(err);
      }
      resolve();
    });
  });
};

export default forgot;