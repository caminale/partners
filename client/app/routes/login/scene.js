import React, {Component} from 'react';
import ReactNative from 'react-native';

import {LoginForm} from '../../forms';
import styles from './styles';

const {
  View,
  Text,
  TouchableOpacity,
  Image
} = ReactNative;

class Scene extends Component {
  render() {
    const {onSubmit, onSubmitFacebook, onForgot, goBack} = this.props;      //Recuperation des paramètres (accès aux fonctions du container)
    return (
      <View style={styles.container}>
<<<<<<< HEAD
        <Image style={[styles.background, styles.container]}
               source={{uri: 'https://thebioscopist.files.wordpress.com/2012/08/sylvester-stallone-rocky-balboa-wallpaper-for-1920x1080-hdtv-1080p-830-15.jpg'}}
               resizeMode="cover">
          <View style={styles.loginWrap}>
            <Text style={styles.titleText}>Login</Text>
          </View>
          <LoginForm
            onSubmit={onSubmit}
            onForgot={onForgot}
            onSubmitFacebook={onSubmitFacebook}/>
          <View style={styles.buttonWrap}>
            <TouchableOpacity style={styles.button} onPress={goBack}>
              <Text style={styles.buttonText}>Go back</Text>
            </TouchableOpacity>
          </View>
        </Image>
=======
        <Text style={styles.title}>Login</Text>
        <LoginForm                                 //Appel du dossier forms contenant le formulaire avec validation
          onSubmit={onSubmit}                     //Passage de l'accès au fonctions du container
          onForgot={onForgot}
          onSubmitFacebook={onSubmitFacebook}/>
        <TouchableOpacity style={styles.button} onPress={goBack}>
          <Text style={styles.buttonText}>Go back</Text>
        </TouchableOpacity>
>>>>>>> df16305c2c486193a2f91466b9d952561fced9bf
      </View>

    );
  }
}

Scene.propTypes = {                     //?????
  onSubmit: React.PropTypes.func.isRequired,
  onSubmitFacebook: React.PropTypes.func.isRequired,
  onForgot: React.PropTypes.func.isRequired,
  goBack: React.PropTypes.func.isRequired
};

export default Scene;

