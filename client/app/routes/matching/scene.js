import React, {Component} from 'react';
import ReactNative from 'react-native';

import styles from './styles';

const {View,
  Text,
  TouchableOpacity
} = ReactNative;
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel
} from 'react-native-simple-radio-button';


var radio_props = [
  {label: 'debutant ', value: 0},
  {label: 'experimenté ', value: 1}
];

class Scene extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      value : 1
    };

  }
  onSelect = () => {
    this.props.onSelect(this.state);
  };


  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.textTitle}>
          Quel est votre Niveau Dans le Fit Game ?
        </Text>

        <RadioForm
          radio_props={radio_props}
          labelColor={'#3c918c'}
          buttonColor={'#997b67'}
          initial={this.state.value}
          formHorizontal={true}
          onPress={(value) => {
            this.setState({value: value})
          }}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={this.onSelect}>
          <Text style={styles.textButton}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

};


Scene.propTypes = {
  onSelect: React.PropTypes.func.isRequired
};
export default Scene;
