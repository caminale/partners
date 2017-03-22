import React, {Component} from 'react';
import ReactNative from 'react-native';

import styles from './styles';
import images from '../../images';

const {
  View,
  Text,
  Image,
  TouchableOpacity
} = ReactNative;

class Scene extends Component {
  render() {
    const {navigate} = this.props;
    return (
      <View style = {styles.container}>
        <Text style={styles.text}>
          Partners
        </Text>
        <View style = {styles.image}>
          <Image
            source={images.logo}
          />
        </View>
        <View style={styles.containerButtons}>
          <TouchableOpacity style={styles.loginButton} onPress={() => navigate('login')}>
            <Text style={styles.text}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.registerButton} onPress={() => navigate('register')}>
            <Text style={styles.text}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Scene;
