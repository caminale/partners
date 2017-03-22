import React from 'react';
import {AsyncStorage} from 'react-native';
import Meteor from 'react-native-meteor';

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

export default Login;
