import React, {Component} from 'react';
import ReactNative from 'react-native';

import {RegisterForm} from '../../forms';
import styles from './styles';
import {Button} from '../../components';


const {
  View,
  Text,
  TouchableOpacity,
  Image
} = ReactNative;

class Scene extends Component {
  render() {
    const {onSubmit, goBack} = this.props;        // Recupération des paramètres (accès aux fonctions du container)
    return (
      <View style={styles.container}>
        <Image
          style={[styles.background, styles.container]}
          source={{uri: 'https://thebioscopist.files.wordpress.com/2012/08/sylvester-stallone-rocky-balboa-wallpaper-for-1920x1080-hdtv-1080p-830-15.jpg'}}
          resizeMode="cover"
        >
          <View style={styles.registerWrap}>
            <Text style={styles.titleText}>Register</Text>
          </View>
          <RegisterForm onSubmit={onSubmit}/>
          <View style={styles.buttonWrap}>
            <Button onPress={goBack}
                    label={'go back'}/>
          </View>
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
