import React, {Component} from 'react';
import ReactNative from 'react-native';
import Meteor from 'react-native-meteor';

const {
  View,
  Text,
  TouchableOpacity
} = ReactNative;

import styles from './styles';

class Scene extends Component {
  render() {
    return (
      <View>
        <Text>Puuuute</Text>
        <TouchableOpacity style={styles.button} onPress={() => Meteor.logout()}>
          <Text style={styles.buttonText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Scene;
