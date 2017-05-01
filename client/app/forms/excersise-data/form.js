import React, {Component} from 'react';
import ReactNative from 'react-native';

import {LogRegInput} from '../../components';
import {Button} from '../../components';


import styles from './styles';

const {
  View,
  Text
} = ReactNative;

const squatIcon = require('../../images/iconSquat.png');
const benchPressIcon = require('../../images/iconBenchPress.png');
const pullDownIcon = require('../../images/iconPullDown.png');
const dipsIcon = require('../../images/iconDips.png');


class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      squats: 0,
      benchPress: 0,
      pullDown: 0,
      dips: 0
    };
  }
  onSubmit = () => {
    this.props.onSubmit(this.state);
  };
  setBenchPress = benchPress => {
    this.setState({benchPress});
  };
  setSquat = squats => {
    this.setState({squats});
  };
  setPullDown = pullDown => {
    this.setState({pullDown});
  };
  setDips = dips => {
    this.setState({dips});
  };

  render() {
    const {errors} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          About your strength
        </Text>
        <LogRegInput
          label={'How much weight for a 10 rep lat PullDown set ?'}
          placeholder={'lat pull down'}
          keyboardType={'numeric'}
          source={pullDownIcon}
          errors={errors.pullDown}
          onChangeText={this.setPullDown}/>
        <LogRegInput
          label={'How much weight for a 10 rep Squat set ?'}
          placeholder={'squat'}
          keyboardType={'numeric'}
          source={squatIcon}
          errors={errors.squats}
          onChangeText={this.setSquat}/>
        <LogRegInput
          label={'How much weight for a 10 rep Bench Press set ?'}
          placeholder={'bench press'}
          keyboardType={'numeric'}
          source={benchPressIcon}
          errors={errors.benchPress}
          onChangeText={this.setBenchPress}/>
        <LogRegInput
          label={'how many dips in a row ?'}
          placeholder={'dips'}
          keyboardType={'numeric'}
          source={dipsIcon}
          errors={errors.dips}
          onChangeText={this.setDips}/>
        <Button onPress={this.onSubmit}
                label={'Submit'}/>
      </View>
    );
  }
}
export default Form;
