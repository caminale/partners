import React, {Component} from 'react';
import ReactNative from 'react-native';

import {RegisterForm} from '../../forms';
import styles from './styles';
import {Button} from '../../components';



const {
  View,
  Text,
  Image
} = ReactNative;

class Scene extends Component {
  render() {
    const {onSubmit, goBack} = this.props;        // Recupération des paramètres (accès aux fonctions du container)
    return (
      <View style={styles.container}>
        <Image
          style={[styles.background, styles.container]}
          source={{uri: 'https://s-media-cache-ak0.pinimg.com/originals/3c/bb/0a/3cbb0ac45c8199673c0b61bee91f34e9.jpg'}}
          resizeMode="stretch">
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
