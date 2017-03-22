import React from 'react';
import ReactNative from 'react-native';

import styles from './styles';

const {
  Text,
  TouchableOpacity
} = ReactNative;

class Component extends React.Component {
  render() {
    const {onPress} = this.props;
    return (
      <TouchableOpacity
        onPress={onPress}
        style = {styles.button}>
        <Text style={styles.text}>
          Facebook login
        </Text>
      </TouchableOpacity>
    );
  }
}

export default Component;
