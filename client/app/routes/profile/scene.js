import React, {Component} from 'react';
import ReactNative from 'react-native';

import styles from './styles';

const {
  View,
  TouchableOpacity,
  Text
} = ReactNative;

class Scene extends Component {             // Vues avec bouton deconnexion
  render() {
    const {logout} = this.props;

    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={logout}>
          <Text style={styles.buttonText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

Scene.propTypes = {
  logout: React.PropTypes.func.isRequired
};

export default Scene;
