import React, {Component} from 'react';
import ReactNative from 'react-native';
import {Button, LogRegInput} from '../../components';

import styles from './styles';

const {
  View,
  TouchableOpacity,
  Text,
  Picker,
  Image
} = ReactNative;

const updateIcon = require('../../images/iconUpdate.png');

class Scene extends Component {
  constructor(props) {
    super(props);

    this.state = {
      infoType: '1',
      info: ''
    };
  }

  updateInfo = (infoType) => {
    if (infoType === "1" || infoType === "3") {
      this.setState({infoType: infoType});
    }
    else if (infoType === "2") {
      this.props.changeInfoTraining();
    }

  };
  submitInformation = () => {

    if(this.state.infoType === "1")
    {
      this.props.updateInfos(this.state);
    }
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
          <Image source={require('../../images/iconBackW.png')}
                 style={{width: 30, height: 30}}/>
          <Text style={styles.buttonText}>go back</Text>
        </TouchableOpacity>
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>
            update your informations
          </Text>
          <View style={styles.pickerWrap}>
            <Picker
              selectedValue={this.state.infoType}
              onValueChange={this.updateInfo}>
              <Picker.Item label="weight" color='#DBDBDB' value="1"/>
              <Picker.Item label="training time" color='#DBDBDB' value="2"/>
              <Picker.Item label="description" color='#DBDBDB' value="3"/>
            </Picker>
          </View>
          <LogRegInput placeholder={'information to update'}
                       source={updateIcon}
                       onChangeText={this.setInfo}/>

          <TouchableOpacity style={styles.buttonUpdate}
                            onPress={this.submitInformation}>
            <Text style={styles.buttonText}>update informations</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.buttonLogout} onPress={logout}>
            <Text style={styles.buttonText}>Sign Out</Text>
            <Image source={require('../../images/iconLogOutW.png')}
                   style={{width: 30, height: 30}}/>
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
