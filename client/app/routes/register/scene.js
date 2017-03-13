import React, {Component} from 'react';
import ReactNative from 'react-native';
const {
  View,
  Text
} = ReactNative;

import styles from './styles';

import RegisterForm from '../../forms/register/container';

class Scene extends Component {
  render() {
    const {onSubmit2} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Register</Text>
        <RegisterForm onSubmit2={onSubmit2}/>
      </View>
    );
  }
}

export default Scene;
