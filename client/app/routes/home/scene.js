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

          <Text style={styles.text}>
            Partners
          </Text>


          <View style={styles.container2}>
            <TouchableOpacity style={styles.button} onPress={() => navigate('login')}>
              <Text style={styles.text}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigate('register')}>
              <Text style={styles.text}>Register</Text>
            </TouchableOpacity>
          </View>
      </View>

    );
  }
}

export default Scene;
