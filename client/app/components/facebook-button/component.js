import React from 'react';
import ReactNative from 'react-native';

import styles from './styles';

const {
  Text,
  TouchableOpacity,
  View
} = ReactNative;

class Component extends React.Component {
  render() {
    const {onPress} = this.props;
    return (
      <View style={styles.buttonWrap}>
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
        >
        <Text style={styles.text}>
          Log in with Facebook
        </Text>
      </TouchableOpacity>
      </View>
    );
  }
}

Component.propTypes = {
  onPress: React.PropTypes.func.isRequired
};

export default Component;
