import React, {Component} from 'react';
import ReactNative from 'react-native';

import {LogRegInput} from '../../components';
import styles from '../beginQuestions/styles';
import {Button} from '../../components';


const {
  View,
  Text,
  TouchableOpacity
} = ReactNative;

const fNameIcon = require('../../images/iconPerson.png');
const heightIcon = require('../../images/iconHeight.png');
const ageIcon = require('../../images/iconAge.png');
const weightIcon = require('../../images/iconWeight.png');


class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fName: '',
      height: 0,
      age: 0,
      weight: 0
    };
  }

  onSubmit = () => {
    this.props.onSubmit(this.state);
  };
  setFName = fName => {
    this.setState({fName});
  };
  setHeight = height => {
    this.setState({height});
  };
  setAge = age => {
    this.setState({age});
  };
  setWeight = weight => {
    this.setState({weight});
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          About yourself
        </Text>
        <LogRegInput
          label={'What is your first name?'}
          placeholder={'your first name'}
          source={fNameIcon}
          onChangeText={this.setFName}/>
        <LogRegInput
          label={'how tall are you ?'}
          placeholder={'height in centimeter'}
          keyboardType={'numeric'}
          source={heightIcon}
          onChangeText={this.setHeight}/>
        <LogRegInput
          label={'How old are you ?'}
          placeholder={'your age'}
          keyboardType={'numeric'}
          source={ageIcon}
          onChangeText={this.setAge}/>
        <LogRegInput
          label={'How much you weight ?'}
          placeholder={'your weight (Kgs)'}
          source={weightIcon}
          keyboardType={'numeric'}
          onChangeText={this.setWeight}/>
        <Button onPress={this.onSubmit}
                label={'Submit'}/>
      </View>
    );
  }
}

Form.propTypes = {
  onSubmit: React.PropTypes.func.isRequired
};

export default Form;
