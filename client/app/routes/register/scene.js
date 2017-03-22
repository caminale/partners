import React, {Component} from 'react';
import ReactNative from 'react-native';

import styles from './styles';
import RegisterForm from '../../forms/register';


const {
  View,
  Text,
  TouchableOpacity
} = ReactNative;

class Scene extends Component {
  render() {
    const {onSubmit, goBack} = this.props;
    return (
      <View style={styles.container}>
        <View  style={styles.container1}>
          <Text style={styles.title}>Register</Text>
        </View>
        <View>
          <RegisterForm onSubmit={onSubmit}/>
          <TouchableOpacity style={styles.button} onPress={() => goBack()}>
            <Text style={styles.text}>Go back</Text>
          </TouchableOpacity>
        </View>
      </View>


    );
  }
}

export default Scene;
