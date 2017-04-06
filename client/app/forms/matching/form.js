import React, {Component} from 'react';
import ReactNative from 'react-native';

const {
  View,
  Text,
  TouchableOpacity
} = ReactNative;
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';


var radio_props1 = [
  {label: 'debutant', value: 0 },
  {label: 'intermediaire', value: 1 },
  {label: 'avancé', value: 2 }
];

var Form = React.createClass({
  getInitialState: function() {
    return {
      value: 0,
    }
  },
  render() {
    return (
      <View>
        <Text>Niveau:</Text>
        <RadioForm
          radio_props1={radio_props1}
          initial={0}
          onPress={(value) => {this.setState({value:value})}}/>
        <TouchableOpacity
          onPress={() => onSelect(this.state)}>
          <Text >
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
});
export default Form;