import React, {Component} from 'react';
import ReactNative from 'react-native';
import {Button, LogRegInput} from '../../components';

import styles from './styles';

const {
  View,
  TouchableOpacity,
  Text,
  Picker
} = ReactNative;

const updateIcon = require('../../images/iconUpdate.png');

class Scene extends Component {
  constructor(props) {
    super(props);

    this.state = {
      infoType: '',
      info: ''
    };
  }

  updateInfo = (infoType) => {
    if(infoType === "1")
    {
      this.setState({infoType: infoType});
    }
    else if(infoType === "2")
    {
      this.props.changeInfoTraining();
    }
  };
  submitInformation = () => {
    this.props.updateInfos(this.state);
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
            selectedValue={this.state.info}
            onValueChange={this.updateInfo}>
            <Picker.Item label="weight" color='#3c918c' value="1"/>
            <Picker.Item label="training time" color='#3c918c' value="2"/>
          </Picker>
        </View>
        <LogRegInput placeholder={'information to update'}
                     source={updateIcon}
                     onChangeText={this.setInfo}/>
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
