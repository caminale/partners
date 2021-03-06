import {Accounts} from 'react-native-meteor';

import Login from './login';

const register = creds => {
  return new Promise((resolve, reject) => {
    Accounts.createUser({...creds}, error => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  })
    .then(() => {
      return Login(creds);
    });
};

export default register;
