import React from 'react';
import {AsyncStorage} from 'react-native';
import Meteor from 'react-native-meteor';
import {AccessToken} from 'react-native-fbsdk';

const Login = creds => {
  return new Promise((resolve, reject) => {
    Meteor.loginWithPassword(creds.email, creds.password, err => {
      if (err) {
        reject(err);
      }
      resolve();
    });
  });
};

const USER_TOKEN_KEY = 'reactnativemeteor_usertoken';

const LoginFacebook = () => {
  const Data = Meteor.getData();
  AccessToken.getCurrentAccessToken()
    .then((res) => {
      if (res) {
        Meteor.call('login', { facebook: res }, (err, result) => {
          if(!err) {//save user id and token
            AsyncStorage.setItem(USER_TOKEN_KEY, result.token);
            Data._tokenIdSaved = result.token;
            Meteor._userIdSaved = result.id;
          }
        });
      }
    });
};

export {
  Login,
  LoginFacebook
};
