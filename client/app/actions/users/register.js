import {Accounts} from 'react-native-meteor';

const register = creds => {
  return Accounts.createUser(creds , error => {
    if (error) {
      return error;
    } else {
      return true;
    }
  });
};

export default register;
