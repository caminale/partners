import React, {Component} from 'react';
import ReactNative from 'react-native';
import {Button} from '../../components';

import styles from './styles';

const {
  View,
  TouchableOpacity,
  Text,
  Picker
} = ReactNative;

class Scene extends Component {
  constructor(props) {
    super(props);

    this.state = {
      infoType: '',
      info: ''
    };
  }

  updateInfo = (infoType) => {
    if(infoType === "1" || infoType === "3")
    {
      this.setState({infoType: infoType});
    }
    else if(infoType === "2")
    {
      this.props.changeInfoTraining();
    }  };
  submitInformation = () => {
    if (this.state.infoType === "1")
    this.props.updateInfos(this.state);

    else if(this.state.infoType === "3")
    {
      this.props.submitDescription(this.state);
    }
  };
  setInfo = info => {
    this.setState({info: info});

  };

  render() {

    const {logout} = this.props;
    const {goBack} = this.props;

    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={goBack}>
          <Text style={styles.buttonText}>go back</Text>
        </TouchableOpacity>
        <Text style={styles.infoText}>
          update your informations
        </Text>
        <View style={styles.pickerWrap}>
          <Picker
            selectedValue={this.state.infoType}
            onValueChange={this.updateInfo}>
            <Picker.Item label="training time" color='#3c918c' value="1"/>
            <Picker.Item label="weight" color='#3c918c' value="2"/>
            <Picker.Item label="description" color='#3c918c' value="3"/>
          </Picker>
        </View>
        <View style={styles.pickerWrap}>
          <Picker
            selectedValue={this.state.info}
            onValueChange={this.setInfo}>
            <Picker.Item label="8h-10h" color='#3c918c' value="early-morning"/>
            <Picker.Item label="10h-12h" color='#3c918c' value="late-morning"/>
            <Picker.Item label="12h-14h" color='#3c918c' value="noon"/>
            <Picker.Item label="14h-16h" color='#3c918c' value="early-afternoon"/>
            <Picker.Item label="16h-18h" color='#3c918c' value="late-afternoon"/>
            <Picker.Item label="18h-20h" color='#3c918c' value="evening"/>
          </Picker>

        </View>
        <Button onPress={this.submitInformation}
                label={'update information'}/>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.button} onPress={logout}>
            <Text style={styles.buttonText}>Sign Out</Text>
          </TouchableOpacity>

        </View>
      </View>
    );
  }
}

Scene.propTypes = {
  logout: React.PropTypes.func.isRequired

};

export default Scene;
