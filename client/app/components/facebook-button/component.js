import React from 'react';
import ReactNative from 'react-native';

import styles from './styles';

const {
  Text,
  TouchableOpacity,
  View,
  Image
} = ReactNative;

class Component extends React.Component {
  render() {
    const {onPress} = this.props;
    return (
      <View style={styles.buttonWrap}>

        <TouchableOpacity
          style={styles.button}
          onPress={onPress}>
          <View style={styles.fbButton}>
          <Image source={require('../../images/iconFacebookW.png')}
                 style={{width: 30, height: 30, marginRight:40, marginTop: 5}}/>
          <Text style={styles.text}>
            Log in with Facebook
          </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

Component.propTypes = {
  onPress: React.PropTypes.func.isRequired
};

export default Component;
