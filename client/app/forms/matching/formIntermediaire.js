import React, {Component} from 'react';
import ReactNative from 'react-native';
import MaterialsIcon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Kohana} from 'react-native-textinput-effects';

import styles from './styles';

const {
  View,
  Text,
  TouchableOpacity
} = ReactNative;

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      level: 0
    };
  }

  onSubmit = () => {
    this.props.onSubmit(this.state);
  };


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container1}>

          <Kohana
            style={styles.input}
            label={'e-mail/username'}
            height={40}
            iconClass={FontAwesome}
            iconName={'user-circle'}
            iconColor={'#3c918c'}
            labelStyle={{color: '#3c918c'}}
            inputStyle={{color: '#3c918c'}}
            onChangeText={this.setUsernameEmail}
          />

        </View>

        <Text style={styles.text}>
          {'\n'} int
        </Text>
        <View style={styles.container1}>
          <Kohana
            style={styles.input}
            label={'password'}
            iconClass={MaterialsIcon}
            iconName={'https'}
            iconColor={'#3c918c'}
            labelStyle={{color: '#3c918c'}}
            inputStyle={{color: '#3c918c'}}
            onChangeText={this.setPassword}
            secureTextEntry={true}
          />
        </View>

        <Text>
          {'\n'}
        </Text>

        <TouchableOpacity
          onPress={this.onSubmit}
          style={styles.button}>
          <Text style={styles.text}>
            Submit
          </Text>
        </TouchableOpacity>

      </View>
    );
  }
}

Form.propTypes = {
  onSubmit: React.PropTypes.func.isRequired
};

export default Form;
