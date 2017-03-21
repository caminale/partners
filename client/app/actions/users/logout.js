import {AsyncStorage} from 'react-native';
import Meteor from 'react-native-meteor';
import {LoginManager} from 'react-native-fbsdk';

const USER_TOKEN_KEY = 'reactnativemeteor_usertoken';

const logout = () => {
  AsyncStorage.setItem(USER_TOKEN_KEY, undefined);
  LoginManager.logOut();
  Meteor.logout();
};

export default logout;
