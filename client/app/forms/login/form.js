import React from 'react';
import ReactNative from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {Fumi} from 'react-native-textinput-effects';

import {FacebookButton} from '../../components';
import styles from './styles';

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
      usernameEmail: ''
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
  setUsernameEmail = usernameEmail => {
    this.setState({usernameEmail});
  };
  onForgot = () => {
    this.props.onForgot(this.state);
  };

  render() {
    const {errors} = this.props;
    return (
      <ScrollView>

        <View style={styles.inputWrap}>
          <Fumi
            style={styles.input}
            labelStyle={{color: '#3c918c'}}
            inputStyle={{color: '#FFF'}}
            label={'Username'}
            iconClass={FontAwesomeIcon}
            iconName={'user'}
            iconColor={'#f95a25'}
            onChangeText={this.setUsernameEmail}
          />

        </View>
        <View style={styles.inputWrap}>
          <Fumi
            style={styles.input}
            labelStyle={{color: '#3c918c'}}
            inputStyle={{color: '#FFF'}}
            secureTextEntry
            label={'Password'}
            iconClass={FontAwesomeIcon}
            iconName={'lock'}
            iconColor={'#f95a25'}
            onChangeText={this.setPassword}
          />
        </View>
        <View style={styles.errorWrap}>
          {errors.usernameEmail &&
          <Text style={styles.errorStyle}>
            {errors.usernameEmail}
          </Text>
          }
          {errors.password &&
          <Text style={styles.errorStyle}>
            {errors.password}
          </Text>
          }
          {errors.submit &&
          <Text style={styles.errorStyle}>
            {errors.submit}
          </Text>
          }
        </View>
        <View style={styles.buttonWrap}>
          <TouchableOpacity
            onPress={this.onSubmit}
            style={styles.loginButton}>
            <Text style={styles.buttonText}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonWrap}>
          <FacebookButton
            onPress={this.onSubmitFacebook}/>
        </View>
        <View style={styles.buttonWrap}>
          <TouchableOpacity
            onPress={this.onForgot}
            style={styles.forgotButton}>
            <Text style={styles.buttonText}>
              forgot password ?
            </Text>
          </TouchableOpacity>
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
