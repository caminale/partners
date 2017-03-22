import React, {Component} from 'react';
import ReactNative from 'react-native';

import styles from './styles';

import {LoginForm} from '../../forms';

const {
  View,
  Text,
  TouchableOpacity
} = ReactNative;

class Scene extends Component {
  render() {
    const {onSubmit, onSubmitFacebook, onForgot, goBack} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <LoginForm
          onSubmit={onSubmit}
          onForgot={onForgot}
          onSubmitFacebook={onSubmitFacebook}/>
        <TouchableOpacity style={styles.button} onPress={() => goBack()}>
          <Text style={styles.buttonText}>Go back</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Scene;

