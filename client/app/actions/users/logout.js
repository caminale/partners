import {AsyncStorage} from 'react-native';
import Meteor from 'react-native-meteor';
import {LoginManager} from 'react-native-fbsdk';

import settings from '../../configs/settings';

const logout = () => {
  AsyncStorage.setItem(settings.USER_TOKEN_KEY, undefined);
  LoginManager.logOut();
  Meteor.logout();
};

export default logout;
