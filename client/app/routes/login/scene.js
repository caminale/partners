import React, {Component} from 'react';
import ReactNative from 'react-native';
const {
  View,
  Text
} = ReactNative;

import styles from './styles';

import LoginForm from '../../forms/login/container';

class Scene extends Component {
  render() {
    const {onSubmit} = this.props;
    const {onSubmit1}=this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <LoginForm onSubmit={onSubmit}
        onSubmit1={onSubmit1}/>
      </View>
    );
  }
}

export default Scene;
