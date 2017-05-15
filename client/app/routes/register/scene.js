import React, {Component} from 'react';
import ReactNative from 'react-native';

import {RegisterForm} from '../../forms';
import styles from './styles';

const {
  View,
  Text,
  Image,
  TouchableOpacity
} = ReactNative;

class Scene extends Component {
  render() {
    const {onSubmit, goBack} = this.props;        // Recupération des paramètres (accès aux fonctions du container)
    return (
      <View style={styles.container}>
        <Image
          style={[styles.background, styles.container]}
          source={{uri: 'http://mediad.publicbroadcasting.net/p/kedm/files/styles/x_large/public/201509/handshake.jpg'}}
          resizeMode="cover">
          <TouchableOpacity style={styles.button} onPress={goBack}>
            <Image source={require('../../images/iconBackW.png')}
                   style={{width: 30, height: 30}}/>
            <Text style={styles.buttonText}>go back</Text>
          </TouchableOpacity>
          <View style={styles.registerWrap}>
            <Text style={styles.titleText}>Register</Text>
          </View>
          <RegisterForm onSubmit={onSubmit}/>
        </Image>
      </View>
    );
  }
}

Scene.propTypes = {
  onSubmit: React.PropTypes.func.isRequired,
  goBack: React.PropTypes.func.isRequired
};

export default Scene;
