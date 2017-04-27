import React from 'react';
import ReactNative from 'react-native';

import {LogRegInput} from '../../components';
import {Button} from '../../components';
import styles from './styles';

const {
  View,
  Text,
  ScrollView
} = ReactNative;

const personIcon = require('../../images/iconPerson.png');
const lockIcon = require('../../images/iconLock1.png');
const emailIcon = require('../../images/iconMail.png');
const confLockIcon = require('../../images/iconConfLock.png');

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      password: '',
      confPassword: ''
    };
  }
  onSubmit = () => {
    this.props.onSubmit(this.state);
  };
  setUsername = username => {
    this.setState({username});
  };
  setEmail = email => {
    this.setState({email});
  };
  setPassword = password => {
    this.setState({password});
  };
  setConfPassword = confPassword => {
    this.setState({confPassword});
  };

  render() {
    const {errors} = this.props;
    return (
      <ScrollView>
        <View style={styles.inputWrap}>
          <LogRegInput
            placeholder={'Username'}
            source={personIcon}
            errors={errors.username}
            onChangeText={this.setUsername}/>
        </View>
        <View style={styles.inputWrap}>
          <LogRegInput
            placeholder={'Email'}
            source={emailIcon}
            errors={errors.email}
            onChangeText={this.setEmail}/>
        </View>
        <View style={styles.inputWrap}>
          <LogRegInput
            secureTextEntry
            placeholder={'Password'}
            source={lockIcon}
            errors={errors.password}
            onChangeText={this.setPassword}/>
        </View>
        <View style={styles.inputWrap}>
          <LogRegInput
            secureTextEntry
            placeholder={'Confirm Password'}
            source={confLockIcon}
            errors={errors.confPassword}
            onChangeText={this.setConfPassword}/>
        </View>
        <View style={styles.buttonWrap}>
          <Button onPress={this.onSubmit}
                  label={'Register'}/>
        </View>
        <View style={styles.errorWrap}>
          {errors.submit &&
          <Text style={styles.errorStyle}>
            {errors.submit}
          </Text>
          }
        </View>
      </ScrollView>
    );
  }
}

Form.propTypes = {
  onSubmit: React.PropTypes.func.isRequired,
  errors: React.PropTypes.object.isRequired
};

export default Form;
