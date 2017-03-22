import React, {Component} from 'react';
import ReactNative from 'react-native';
const {
  View,
  Text,
  Image,
  TouchableOpacity
} = ReactNative;

import styles from './styles';
import images from '../../configs/images';


class Scene extends Component {
  render() {
    const {navigate} = this.props;
    return (
      <View>
        <View style = {styles.container}>

          <Text style={styles.title}>
            Partners
          </Text>
          <Image
            source={images.logo}
          />
        </View>

        <View style = {styles.container3}>
          <TouchableOpacity style={styles.button} onPress={() => navigate('login')}>
            <Text style={styles.text}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style = {styles.container4}>

        <TouchableOpacity style={styles.button} onPress={() => navigate('register')}>
            <Text style={styles.text}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>


    );
  }
}

export default Scene;
