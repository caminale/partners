import {Accounts} from 'react-native-meteor';

import LoginAction from './login';

const register = creds => {
  return new Promise((resolve, reject) => {
    Accounts.createUser(creds, error => {
      if (error) {
        reject(error);
      }
      resolve();
    });
  })
    .then(() => {
      return LoginAction(creds);
    });
};

export default register;
