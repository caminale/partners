import React from 'react';
import ReactNative from 'react-native';

import {FacebookButton} from '../../components';
import {LogRegInput} from '../../components';
import styles from './styles';
import {Button} from '../../components';

const personIcon = require('../../images/iconPerson.png');
const lockIcon = require('../../images/iconLock.png');

const {
  View,
  Text,
  TouchableOpacity,
  ScrollView
} = ReactNative;

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      password: '',
      email: ''
    };
  }
  onSubmit = () => {
    this.props.onSubmit(this.state);
  };
  onSubmitFacebook = () => {
    this.props.onSubmitFacebook();
  };
  setPassword = password => {
    this.setState({password});
  };
  setUsernameEmail = email => {
    this.setState({email});
  };
  onForgot = () => {
    this.props.onForgot(this.state);
  };

  render() {
    const {errors} = this.props;
    return (
      <ScrollView>
        <View style={styles.inputWrap}>
          <LogRegInput
            placeholder={'Username'}
            source={personIcon}
            errors={errors.email}
            onChangeText={this.setUsernameEmail}
          />
        </View>
        <View style={styles.inputWrap}>
          <LogRegInput
            placeholder={'Password'}
            secureTextEntry={true}
            source={lockIcon}
            errors={errors.password}
            onChangeText={this.setPassword}
          />
        </View>
        <View style={styles.errorWrap}>
          {errors.submit &&
          <Text style={styles.errorStyle}>
            {errors.submit}
          </Text>
          }
        </View>
        <View style={styles.buttonWrap}>
          <TouchableOpacity style={styles.buttonUpdate}
                            onPress={this.onSubmit}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonWrap}>
          <FacebookButton
            onPress={this.onSubmitFacebook}/>
        </View>
      </ScrollView>
    );
  }
}

Form.propTypes = {
  onSubmit: React.PropTypes.func.isRequired,
  onSubmitFacebook: React.PropTypes.func.isRequired,
  errors: React.PropTypes.object.isRequired
};

export default Form;
