import {Accounts} from 'react-native-meteor';

import Login from './login';

const register = creds => {
  console.log('yolo'+creds.password);
  return new Promise((resolve, reject) => {


    Accounts.createUser({
      ...creds,
      profile: {
        picture:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Placeholder_staff_photo.svg/1000px-Placeholder_staff_photo.svg.png'
      }


    }, error => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  })
    .then(() => {
    console.log('succes');
      return Login(creds);
    });
};

export default register;
