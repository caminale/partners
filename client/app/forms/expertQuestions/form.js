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
      levelBP: 0,
      levelDL: 0,
      levelSQ:0,
      level: null,
      benchPress: 0,
      deadLift: 0,
      squats:0

    };
  }

  onSubmit = () => {
    this.props.onSubmit(this.state);
  };

  calculLVL = () => {
    this.calculLVLSQ();
    this.calculLVLBP();
    this.calculLVLDL();
    let lvl = this.state.levelBP + this.state.levelDL + this.state.levelSQ;
    this.setLevel(lvl);
    console.log('level :' + this.state.level);
  };

  setLevel = level => {
    this.setState({level});
  };

  setSquat = squats => {
    this.calculLVL();
    this.setState({squats});
  };

  calculLVLBP = () => {

    if (this.state.benchPress <= 60 && this.state.benchPress >= 20) {
      this.setLevelBP(1);
      console.log('lvl bench press:' + this.state.levelBP);
    }

    if (this.state.benchPress <= 80 && this.state.benchPress >= 61 ) {
      this.setLevelBP(2);
      console.log('lvl bench press:' + this.state.levelBP);
    }

    if (this.state.benchPress >= 81) {
      this.setLevelBP(3);
      console.log('lvl bench press:' + this.state.levelBP);
    }


  };

  calculLVLDL = () => {

    if (this.state.deadLift <= 90 && this.state.deadLift >= 60) {
      this.setLevelDL(1);
      console.log('lvl deadLift:' + this.state.levelDL);
    }

    if (this.state.deadLift <= 120 && this.state.deadLift >= 91) {
      this.setLevelDL(2);
      console.log('lvl deadLift:' + this.state.levelDL);
    }

    if (this.state.deadLift >= 120) {
      this.setLevelDL(3);
      console.log('lvl deadLift:' + this.state.levelDL);
    }

  };

  calculLVLSQ = () => {

    if (this.state.squats <= 80 && this.state.squats >= 40) {
      this.setLevelSQ(1);
      console.log('level squats :' + this.state.levelSQ);
    }

    if (this.state.squats <=120 && this.state.squats >= 81) {
      this.setLevelSQ(2);
      console.log('level squats :' + this.state.levelSQ);
    }

    if (this.state.squats >= 121) {
      this.setLevelSQ(3);
      console.log('level squats :' + this.state.levelSQ);
    }

  };
  setLevelBP = levelBP => {
    this.setState({levelBP});
  };

  setLevelDL = levelDL => {
    this.setState({levelDL});
  };
  setLevelSQ = levelSQ => {
    this.setState({levelSQ});
  };

  setBenchPress = benchPress => {
    this.calculLVL();
    this.setState({benchPress});
  };

  setDeadLift = deadLift => {
    this.calculLVL();
    this.setState({deadLift});
  };

  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.text}>
          How much weight for a 10 rep Squat set ?
        </Text>
        <TextInput
          style={styles.input}
          placeholder="how many kilos"
          keyboardType={'numeric'}
          onChangeText={this.setSquat}
        />

        <Text style={styles.text}>
          how much weight for a 10 rep Bench Press set ?
        </Text>
        <TextInput
          style={styles.input}
          placeholder="how many kilos"
          keyboardType={'numeric'}
          onChangeText={this.setBenchPress}
        />

        <Text style={styles.text}>
          how much weight for a 10 rep DeadLift set ?
        </Text>
        <TextInput
          style={styles.input}
          placeholder="how many kilos"
          keyboardType={'numeric'}
          onChangeText={this.setDeadLift}
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
