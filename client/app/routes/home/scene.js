import React, {Component} from 'react';
import ReactNative from 'react-native';
const {
  View,
  Text,
  TouchableOpacity
} = ReactNative;

import styles from './styles';

class Scene extends Component {
  render() {
    const {navigate} = this.props;
    return (
      <View style = {styles.container}>
        <Text style={styles.texte}>
          Ici on va se loguer
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => navigate('login')}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigate('register')}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Scene;
