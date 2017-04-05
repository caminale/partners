import Meteor from 'react-native-meteor';

const Login = creds => {
  return new Promise((resolve, reject) => {
    Meteor.loginWithPassword(creds.usernameEmail, creds.password, err => {
      if (err) {
        reject(err);
      }
      resolve();
    });
  });
};

export default Login;
