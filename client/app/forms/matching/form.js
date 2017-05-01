import React, {Component} from 'react';
import ReactNative from 'react-native';

import {LogRegInput} from '../../components';
import {Button} from '../../components';


import styles from './styles';

const {
  View,
  Text,
  Picker
} = ReactNative;


class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dayTime: ''
    };
  }

  onSubmit = () => {
    console.log(this.state.dayTime);
    this.props.onSubmit(this.state);
  };

  updateLanguage = (dayTime) => {
    this.setState({dayTime: dayTime});
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Let's find your Partner
        </Text>
        <View style={styles.pickerContainer}>
          <Text style={styles.textq}>
            When do you want to workout ?
          </Text>
          <View style={styles.pickerWrap}>
            <Picker
              selectedValue={this.state.dayTime}
              onValueChange={this.updateLanguage}>
              <Picker.Item label="8h-10h" color='#3c918c' value="early-morning"/>
              <Picker.Item label="10h-12h" color='#3c918c' value="late-morning"/>
              <Picker.Item label="12h-14h" color='#3c918c' value="noon"/>
              <Picker.Item label="14h-16h" color='#3c918c' value="early-afternoon"/>
              <Picker.Item label="16h-18h" color='#3c918c' value="late-afternoon"/>
              <Picker.Item label="18h-20h" color='#3c918c' value="evening"/>
            </Picker>

          </View>
        </View>
        <Button onPress={this.onSubmit}
                label={'Submit'}/>
      </View>
    );
  }
}
export default Form;
