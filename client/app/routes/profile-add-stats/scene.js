import React, {Component} from 'react';
import ReactNative from 'react-native';

import {Button, LogRegInput} from '../../components';
import styles from './styles';

const {
  View,
  Text,
  Picker,
  Image,
  TouchableOpacity
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
        <TouchableOpacity style={styles.button} onPress={goBack}>
          <Image source={require('../../images/iconBackW.png')}
                 style={{width: 30, height: 30}}/>
          <Text style={styles.buttonText}>go back</Text>
        </TouchableOpacity>
        <View style={styles.infoContainer}>
        <Text style={styles.infoText}>
          add Stats
        </Text>
        <View style={styles.pickerWrap}>
          <Picker
            selectedValue={this.state.exerciseType}
            onValueChange={this.updateExercise}>
            <Picker.Item label="bench press" color='#DBDBDB' value="BenchPress"/>
            <Picker.Item label="squats" color='#DBDBDB' value="Squats"/>
            <Picker.Item label="dips" color='#DBDBDB' value="Dips"/>
            <Picker.Item label="pull down" color='#DBDBDB' value="PullDown"/>
          </Picker>
        </View>
        <LogRegInput placeholder={'exercise to update'}
                     source={updateIcon}
                     onChangeText={this.setInfo}/>
          <TouchableOpacity style={styles.buttonUpdate}
                            onPress={this.addStats}>
            <Text style={styles.buttonText}>update</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Scene;
