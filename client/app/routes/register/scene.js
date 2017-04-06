import React, {Component} from 'react';
import ReactNative from 'react-native';

import {RegisterForm} from '../../forms';
import styles from './styles';

const {
  View,
  Text,
  TouchableOpacity
} = ReactNative;

class Scene extends Component {
  render() {
    const {onSubmit, goBack} = this.props;        //Recupération des paramètres (accès aux fonctions du container)
    return (
      <View style={styles.container}>
        <View style={styles.container1}>
          <Text style={styles.title}>Register</Text>
        </View>
        <View>
          <RegisterForm onSubmit={onSubmit}/>
          <TouchableOpacity style={styles.button} onPress={goBack}>
            <Text style={styles.text}>Go back</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

Scene.propTypes = {
  onSubmit: React.PropTypes.func.isRequired,
  goBack: React.PropTypes.func.isRequired
};

export default Scene;
