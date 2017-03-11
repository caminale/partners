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
    const {onSubmit} = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => onSubmit({email:'keke@gmail.com', password: 'a123456'})}
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
