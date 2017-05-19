import React, {Component} from 'react';
import ReactNative from 'react-native';
import RadioForm from 'react-native-simple-radio-button';

import {LogRegInput} from '../../components';
import styles from '../personal-data/styles';

const fNameIcon = require('../../images/iconPerson.png');
const heightIcon = require('../../images/iconHeight.png');
const ageIcon = require('../../images/iconAge.png');
const weightIcon = require('../../images/iconWeight.png');

const {
  View,
  Text,
  TouchableOpacity
} = ReactNative;

const radio_props = [
  {label: 'male', value: 0},
  {label: 'female', value: 1}
];

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fName: '',
      height: 0,
      age: 0,
      weight: 0,
      value: 0,
      gender: ''
    };
  }
  onSubmit = () => {
    if (this.state.value === 0) {
      const male = 'male';
      this.setState({male});
    }
    if (this.state.value === 1) {
      const female = 'female';
      this.setState({female});
    }
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
        <View style={styles.radiobuttoncontainer}>
          <Text style={styles.textq}>
            Are you a male or a female ?
          </Text>
          <RadioForm
            radio_props={radio_props}
            initial={0}
            buttonSize={10}
            buttonOuterSize={20}        
            labelColor={'#64758b'}
            labelStyle={{fontSize: 15, fontWeight: "500"}}
            formHorizontal={true}
            buttonColor={'#0B69E4'}
            onPress={(value) => {
              this.setState({value: value})
            }}
          />
        </View>
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
        <TouchableOpacity
          style={styles.buttonAddStats}
          onPress={this.onSubmit}>
          <Text style={{
            fontSize: 20,
            textAlign: 'center',
            color: 'white',
            fontWeight: 'bold'
          }}>
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
