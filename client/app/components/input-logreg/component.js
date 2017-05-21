import React from 'react';
import {View, Text, TextInput, Image} from 'react-native';

import styles from './styles';

class Component extends React.Component {
  render() {
    const {errors} = this.props;
    const {label} = this.props;
    return (
      <View>
        <View style={styles.labelWrap}>
          <Text style={styles.label}>
            {label}
          </Text>
          <View style={styles.inputWrap}>
            <View style={styles.iconWrap}>
              <Image style={styles.icon}
                     source={this.props.source}
                     resizeMode="contain"/>
            </View>
            <TextInput style={styles.input}
                       placeholderTextColor={"white"}
                       underlineColorAndroid='rgba(0,0,0,0)'
                       placeholder={this.props.placeholder}
                       onChangeText={this.props.onChangeText}
                       keyboardType={this.props.keyboardType}
                       secureTextEntry={this.props.secureTextEntry}/>
          </View>
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
