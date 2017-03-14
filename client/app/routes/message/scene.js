import React, {Component} from 'react';
import ReactNative from 'react-native';
const {
  View,
  Text
} = ReactNative;

import styles from './styles';

class Scene extends Component {
  render() {
    return (
      <View style = {styles.container}>
        <Text style={styles.texte}>
          Ici sera la messagerie
        </Text>
      </View>
    );
  }
}

export default Scene;
