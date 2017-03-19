import React, {Component} from 'react';
import ReactNative from 'react-native';

import styles from './styles';

const {
  View,
  Text
} = ReactNative;

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
