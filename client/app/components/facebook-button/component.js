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
        style={styles.button}
        onPress={onPress}
        >
        <Text style={styles.text}>
          Facebook login
        </Text>
      </TouchableOpacity>
    );
  }
}

Component.propTypes = {
  onPress: React.PropTypes.func.isRequired
};

export default Component;
