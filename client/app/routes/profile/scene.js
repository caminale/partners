import React, {Component} from 'react';
import ReactNative from 'react-native';
const {
  View,
  TouchableOpacity,
  Text
} = ReactNative;

import styles from './styles';

class Scene extends Component {
  render() {
    const {logout} = this.props;

    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={logout}>
          <Text style={styles.buttonText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Scene;
