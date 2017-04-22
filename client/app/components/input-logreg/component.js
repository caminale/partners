import React from 'react';
import {View, Text, TextInput, Image} from 'react-native';

import styles from './styles';

class Component extends React.Component {
  render() {
    const {errors} = this.props;
    return (

      <View>
      <View style={styles.inputWrap}>
        <View style={styles.iconWrap}>
          <Image style={styles.icon}
                 source={this.props.source}
                 resizeMode="contain"/>
        </View>
        <TextInput style={styles.input}
                   placeholder={this.props.placeholder}
                   onChangeText={this.props.onChangeText}
                   secureTextEntry={this.props.secureTextEntry}/>
      </View>
        <View style={styles.errorWrap}>
          {errors &&
          <Text style={styles.errorStyle}>
            {errors}
          </Text>
          }
        </View>
      </View>
    );
  }
}
export default Component;
