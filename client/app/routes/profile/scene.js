import React, {Component} from 'react';
import ReactNative from 'react-native';

import styles from './styles';

const {
  View,
  TouchableOpacity,
  Text
} = ReactNative;

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
