import React, {Component} from 'react';
import ReactNative from 'react-native';
import {LogRegInput} from '../../components';
import Meteor from 'react-native-meteor';


import styles from './styles';

const {
  View,
  Text,
  TextInput,
  TouchableOpacity
} = ReactNative;

const timeIcon = require('../../images/iconTime.png');
const pushUIcon = require('../../images/iconPU.png');
const pullUIcon = require('../../images/iconPullU.png');


class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      levelPush: 2,
      levelPull: 2,
      level: null,
      pushUps: 2,
      pullUps: 2,
      moisExp: 2,
      lvlExp: 2
    };
  }

  onSubmit = () => {
    this.calculLVL();
    const stats = {
      pushup: this.state.pushUps,
      pullup: this.state.pullUps,
      level: this.state.level
    };
    console.log(this.state.level);

    Meteor.call('addStats', stats);

    // this.props.onSubmitPush(statsPush);
    // this.props.onSubmitPull(statsPull);


  };

  calculLVL = () => {
    this.calculLVLPull();
    this.calculLVLPush();
    // this.calculExp();
    let lvl = this.state.levelPull + this.state.levelPush + this.state.lvlExp;
    this.setLevel(lvl);
  };

  setLevel = level => {
    this.setState({level});
  };

  setExp = moisExp => {
    this.setState({moisExp});
    this.calculExp();
    // this.calculLVL();
  };

  calculLVLPush = () => {

    if (this.state.pushUps <= 50 && this.state.pushUps >= 20) {
      this.setLevelPush(2);
    }
    if (this.state.pushUps <= 19) {
      this.setLevelPush(1);
    }
    if (this.state.pushUps >= 51) {
      this.setLevelPush(3);
    }
  };

  calculLVLPull = () => {

    if (this.state.pullUps <= 5 && this.state.pullUps >= 0) {
      this.setLevelPull(1);
    }

    if (this.state.pullUps <= 15 && this.state.pullUps >= 6) {
      this.setLevelPull(2);
    }

    if (this.state.pullUps >= 16) {
      this.setLevelPull(3);
    }

  };

  calculExp = () => {

    if (this.state.moisExp <= 3 && this.state.moisExp >= 0) {
      this.setLvlExp(1);
    }
    if (this.state.moisExp <= 8 && this.state.moisExp >= 4) {
      this.setLvlExp(2);
    }
    if (this.state.moisExp >= 9) {
      this.setLvlExp(3);
    }
  };
  setLevelPush = levelPush => {
    this.setState({levelPush});
  };

  setLevelPull = levelPull => {
    this.setState({levelPull});
  };
  setLvlExp = lvlExp => {
    this.setState({lvlExp});
  };

  setPushUps = pushUps => {
    this.setState({pushUps});

    // this.calculLVL();
  };

  setPullUps = pullUps => {
    this.setState({pullUps});

    // this.calculLVL();
    console.log(pullUps);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          For how many months do you work out ?
        </Text>
        <LogRegInput
          placeholder={'experience'}
          source={timeIcon}
          onChangeText={this.setExp}/>
        <Text style={styles.text}>
          How many push ups in a row ?
        </Text>
        <LogRegInput
          placeholder={'push ups'}
          source={pushUIcon}
          onChangeText={this.setPushUps}/>
        <Text style={styles.text}>
          How many pull ups in a row ?
        </Text>
        <LogRegInput
          placeholder={'pull ups'}
          source={pullUIcon}
          onChangeText={this.setPullUps}/>
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
export default Form;
