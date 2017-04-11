import React, {Component} from 'react';
import ReactNative from 'react-native';

import styles from './styles';

const {
  View,
  Text,
  TextInput,
  TouchableOpacity
} = ReactNative;

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      levelPush: 0,
      levelPull: 0,
      level: null,
      pushUps: 0,
      pullUps: 0,
      moisExp:0,
      lvlExp:0
    };
  }

  onSubmit = () => {
    this.props.onSubmit(this.state);
  };

  calculLVL = () => {
    this.calculLVLPull();
    this.calculLVLPush();
    this.calculExp();
    let lvl = this.state.levelPull + this.state.levelPush + this.state.lvlExp;
    this.setLevel(lvl);
    console.log('level :' + this.state.level);
  };

  setLevel = level => {
    this.setState({level});
  };

  setExp = moisExp => {
    this.calculLVL();
    this.setState({moisExp});
  };

  calculLVLPush = () => {

    if (this.state.pushUps <= 50 && this.state.pushUps >= 20) {
      this.setLevelPush(2);
      console.log('lvl push:' + this.state.levelPush);
    }

    if (this.state.pushUps <= 19) {
      this.setLevelPush(1);
      console.log('lvl push:' + this.state.levelPush);
    }

    if (this.state.pushUps >= 51) {
      this.setLevelPush(3);
      console.log('lvl push:' + this.state.levelPush);
    }


  };

  calculLVLPull = () => {

    if (this.state.pullUps <= 5 && this.state.pullUps >= 0) {
      this.setLevelPull(1);
      console.log('lvl pull:' + this.state.levelPull);
    }

    if (this.state.pullUps <= 15 && this.state.pullUps >= 6) {
      this.setLevelPull(2);
      console.log('lvl pull:' + this.state.levelPull);
    }

    if (this.state.pullUps >= 16) {
      this.setLevelPull(3);
      console.log('lvl pull:' + this.state.levelPull);
    }

  };

  calculExp = () => {

    if (this.state.moisExp <= 3 && this.state.moisExp >= 0) {
      this.setLvlExp(1);
      console.log('mois exp :' + this.state.lvlExp);
    }

    if (this.state.moisExp <= 8 && this.state.moisExp >= 4) {
      this.setLvlExp(2);
      console.log('mois exp :' + this.state.lvlExp);
    }

    if (this.state.moisExp >= 9) {
      this.setLvlExp(3);
      console.log('mois exp :' + this.state.lvlExp);
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
    this.calculLVL();
    this.setState({pushUps});
  };

  setPullUps = pullUps => {
    this.calculLVL();
    this.setState({pullUps});
  };

  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.text}>
          Combien de mois de muscu?
        </Text>
        <TextInput
          style={styles.input}
          placeholder="experience"
          keyboardType={'numeric'}
          onChangeText={this.setExp}
        />

        <Text style={styles.text}>
          Combien de pompes ?
        </Text>
        <TextInput
          style={styles.input}
          placeholder="push ups!"
          keyboardType={'numeric'}
          onChangeText={this.setPushUps}
        />

        <Text style={styles.text}>
          Combien de tractions ?
        </Text>
        <TextInput
          style={styles.input}
          placeholder="pull ups!"
          keyboardType={'numeric'}
          onChangeText={this.setPullUps}
        />


        <TouchableOpacity
          onPress={this.calculLVL}
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
