import React, {Component} from 'react';
import ReactNative from 'react-native';

import styles from './styles';

import {RegisterForm} from '../../forms';

const {
  View,
  Text,
  TouchableOpacity
} = ReactNative;

class Scene extends Component {
  render() {
    const {onSubmit, goBack} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Register</Text>
        <RegisterForm onSubmit={onSubmit}/>
        <TouchableOpacity style={styles.button} onPress={() => goBack()}>
          <Text style={styles.text}>Go back</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Scene;
