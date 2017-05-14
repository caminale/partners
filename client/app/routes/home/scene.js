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

const gymPic = require('../../images/arnold.png')
class Scene extends Component {         //SCENE PAGE HOME (LOGO + BOUTTONS REGISTER/LOGIN)
  navigateToLogin = () => {
    this.props.navigate('login');     //Passage de la route login à la fonction navigate prédente dans le container
  };
  navigateToRegister = () => {
    this.props.navigate('register');
  };
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={[styles.background, styles.container]}
          source={{uri: 'https://greatist.com/sites/default/files/gym-floor-guide.jpg'}}
          resizeMode="cover">
        <Text style={styles.title}>
          Partners
        </Text>
          <View style={styles.muscleContainer}>
            <Image source={require('../../images/iconMuscleW.png')}
                   style={{width: 100, height: 100}}/>
          </View>
        <View style={styles.containerButtons}>
          <TouchableOpacity style={styles.loginButton}  //Appel des 2 fonctions définies plus haut
                            onPress={this.navigateToLogin}>
            <Text style={styles.text}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.registerButton}
                            onPress={this.navigateToRegister}>
            <Text style={styles.text}>Register</Text>
          </TouchableOpacity>
        </View>
        </Image>
      </View>
    );
  }
}

export default Scene;
