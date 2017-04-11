import React from 'react';
import ReactNative from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {Fumi} from 'react-native-textinput-effects';

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
          <Fumi
            style={styles.input}
            labelStyle={{color: '#3c918c'}}
            inputStyle={{color: '#FFF'}}
            label={'Username'}
            iconClass={FontAwesomeIcon}
            iconName={'user'}
            iconColor={'#f95a25'}
            onChangeText={this.setUsername}
          />
        </View>
        <View style={styles.errorWrap}>
          {errors.username &&
          <Text style={styles.errorStyle}>
            {errors.username}
          </Text>
          }
        </View>
        <View style={styles.inputWrap}>
          <Fumi
            style={styles.input}
            labelStyle={{color: '#3c918c'}}
            inputStyle={{color: '#FFF'}}
            label={'Email'}
            iconClass={FontAwesomeIcon}
            iconName={'envelope'}
            iconColor={'#f95a25'}
            onChangeText={this.setEmail}
          />
        </View>
        <View style={styles.errorWrap}>
          {errors.email &&
          <Text
            style={styles.errorStyle}
          >
            {errors.email}
          </Text>
          }
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
          {errors.password &&
          <Text style={styles.errorStyle}>
            {errors.password}
          </Text>
          }
        </View>
        <View style={styles.inputWrap}>

          <Fumi
            style={styles.input}
            labelStyle={{color: '#3c918c'}}
            inputStyle={{color: '#FFF'}}
            secureTextEntry
            label={'Confirm Password'}
            iconClass={FontAwesomeIcon}
            iconName={'lock'}
            iconColor={'#f95a25'}
            onChangeText={this.setConfPassword}
          />
        </View>
        <View style={styles.errorWrap}>
          {errors.confPassword &&
          <Text style={styles.errorStyle}>
            {errors.confPassword}
          </Text>
          }
        </View>
        <View style={styles.buttonWrap}>
          <TouchableOpacity
            onPress={this.onSubmit}
            style={styles.button}>
            <Text style={styles.buttonText}>
              Register
            </Text>
          </TouchableOpacity>
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
