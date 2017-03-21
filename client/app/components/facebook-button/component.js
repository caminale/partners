import React from 'react';
import ReactNative from 'react-native';
import {LoginManager} from 'react-native-fbsdk';

import styles from './styles';

const {
  Text,
  TouchableOpacity
} = ReactNative;


class Component extends React.Component {
  login = () => {
    const _this = this;
    LoginManager.logInWithReadPermissions(['public_profile', 'email'])
      .then(function(result) {
        if(result.isCancelled) {
          console.log('Login facebook canceled');
        } else {
          _this.props.onLoginFacebook();
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    return (
      <TouchableOpacity
        onPress={() => this.login()}
        style = {styles.button}>
        <Text style={styles.text}>
          Facebook login
        </Text>
      </TouchableOpacity>
    );
  }
}

export default Component;
