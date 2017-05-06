import React, {Component} from 'react';
import ReactNative from 'react-native';

import {Button, LogRegInput} from '../../components';
import styles from './styles';

const {
  View,
  Text,
  Picker
} = ReactNative;

const updateIcon = require('../../images/iconUpdate.png');

class Scene extends Component {
  constructor(props) {
    super(props);

    this.state = {
      exerciseWeight: '',
      exerciseType: 'BenchPress',

    };
  }
  updateExercise = (exerciseType) => {
      this.setState({exerciseType: exerciseType});
  };
  setInfo = weight => {
    this.setState({exerciseWeight: weight});
  };
  addStats = () => {
    this.props.addStats(this.state);
  };


  render() {
    const {goBack} = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.infoText}>
          add Stats
        </Text>
        <View style={styles.pickerWrap}>
          <Picker
            selectedValue={this.state.exerciseType}
            onValueChange={this.updateExercise}>
            <Picker.Item label="bench press" color='#3c918c' value="BenchPress"/>
            <Picker.Item label="squats" color='#3c918c' value="Squats"/>
            <Picker.Item label="dips" color='#3c918c' value="Dips"/>
            <Picker.Item label="pull down" color='#3c918c' value="PullDown"/>
          </Picker>
        </View>
        <LogRegInput placeholder={'exercise to update'}
                     source={updateIcon}
                     onChangeText={this.setInfo}/>
        <Button onPress={this.addStats}
                label={'update'}/>
        <Button onPress={goBack}
                label={'go back'}/>
      </View>
    );
  }
}

export default Scene;
