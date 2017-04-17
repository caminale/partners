import React from 'react';
import ReactNative from 'react-native';

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {Fumi} from 'react-native-textinput-effects';

import styles from './styles';

const {
  Text,
  TouchableOpacity,
  View
} = ReactNative;

class Component extends React.Component {
  render() {
    return (
      <Fumi
        style={styles.input}
        labelStyle={{color: '#3c918c'}}
        inputStyle={{color: '#FFF'}}
        //label={'Username'}
        iconClass={FontAwesomeIcon}
        //iconName={'user'}
        iconColor={'#f95a25'}
      />

    );
  }
}
/*
Component.propTypes = {
  onPress: React.PropTypes.func.isRequired
};*/

export default Component;
