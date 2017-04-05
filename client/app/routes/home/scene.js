import React, {Component} from 'react';
import ReactNative from 'react-native';

import images from '../../images';
import styles from './styles';

const {
  View,
  Text,
  Image,
  TouchableOpacity
} = ReactNative;

class Scene extends Component {
  navigateToLogin = () => {
    this.props.navigate('login');
  };
  navigateToRegister = () => {
    this.props.navigate('register');
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Partners
        </Text>
        <View style={styles.image}>
          <Image
            source={images.logo}
            />
        </View>
        <View style={styles.containerButtons}>
          <TouchableOpacity style={styles.loginButton}
                            onPress={this.navigateToLogin}>
            <Text style={styles.text}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.registerButton}
                            onPress={this.navigateToRegister}>
            <Text style={styles.text}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Scene;
