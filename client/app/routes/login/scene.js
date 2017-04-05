import React, {Component} from 'react';
import ReactNative from 'react-native';

import {LoginForm} from '../../forms';
import styles from './styles';

const {
  View,
  Text,
  TouchableOpacity
} = ReactNative;

class Scene extends Component {
  render() {
    const {onSubmit, onSubmitFacebook, onForgot, goBack} = this.props;      //Recuperation des paramètres (accès aux fonctions du container)
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <LoginForm                                 //Appel du dossier forms contenant le formulaire avec validation
          onSubmit={onSubmit}                     //Passage de l'accès au fonctions du container
          onForgot={onForgot}
          onSubmitFacebook={onSubmitFacebook}/>
        <TouchableOpacity style={styles.button} onPress={goBack}>
          <Text style={styles.buttonText}>Go back</Text>
        </TouchableOpacity>
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

