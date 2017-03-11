import React from 'react';
import ReactNative from 'react-native';
const {
  View,
  Text,
  TouchableOpacity
} = ReactNative;

import styles from './styles';

class Form extends React.Component {
  render() {
    const {handleSubmit} = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={handleSubmit(submit)}
          style = {styles.button}>
          <Text>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Form;
