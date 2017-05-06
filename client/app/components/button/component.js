import React from 'react';
import {View,
  Text,
  TouchableHighlight,
  Image
} from 'react-native';

import styles from './styles';

class Component extends React.Component {

  render() {
    const {label} = this.props;
    return (
      <TouchableHighlight onPress={this.props.onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>
          {label}
        </Text>
      </View>
      </TouchableHighlight>
    );
  }
}
export default Component;
