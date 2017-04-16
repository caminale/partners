import Meteor from 'react-native-meteor';
import {AsyncStorage} from 'react-native';
import {AccessToken, LoginManager} from 'react-native-fbsdk';

import settings from '../../configs/settings';

const LoginFacebook = () => {
  LoginManager.logInWithReadPermissions(['public_profile', 'email'])
    .then(result => {
      if (result.isCancelled) {
        console.log('Login facebook canceled');
      } else {
        const Data = Meteor.getData();
        AccessToken.getCurrentAccessToken()
          .then(res => {
            if (res) {
              Meteor.call('login', {facebook: res}, (err, result) => {
                if (!err) {// Save user id and token
                  AsyncStorage.setItem(settings.USER_TOKEN_KEY, result.token);
                  Data._tokenIdSaved = result.token;
                  Meteor._userIdSaved = result.id;
                }
              });
            }
          });
      }
    })
    .catch(err => {
      console.log(err);
    });
};

export default LoginFacebook;
