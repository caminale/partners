import React from 'react';
import ReactNative from 'react-native';
import MaterialsIcon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Kohana} from 'react-native-textinput-effects';

import {FacebookButton} from '../../components';
import styles from './styles';

const {
  View,
  Text,
  TouchableOpacity
} = ReactNative;

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      password: '',
      usernameEmail:''
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
      <View style={styles.container}>
        <View style={styles.container1}>

          <Kohana
            style={styles.input}
            label={'e-mail/username'}
            height={40}
            iconClass={FontAwesome}
            iconName={'user-circle'}
            iconColor={'#3c918c'}
            labelStyle={{ color: '#3c918c' }}
            inputStyle={{ color: '#3c918c' }}
            onChangeText={this.setUsernameEmail}
          />

        </View>

        <Text style={styles.text}>
          {'\n'}
        </Text>
        <View style={styles.container1}>
          <Kohana
            style={styles.input}
            label={'password'}
            iconClass={MaterialsIcon}
            iconName={'https'}
            iconColor={'#3c918c'}
            labelStyle={{ color: '#3c918c' }}
            inputStyle={{ color: '#3c918c' }}
            onChangeText={this.setPassword}
            secureTextEntry={true}
          />
        </View>
        {errors.usernameEmail &&
        <Text style={styles.error}>
          {errors.usernameEmail}
        </Text>
        }
        {errors.password &&
        <Text style={styles.error}>
          {errors.password}
        </Text>
        }
        <Text>
          {'\n'}
        </Text>

        <TouchableOpacity
          onPress={this.onSubmit}
          style={styles.button}>
          <Text style={styles.text}>
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.onForgot}
          style = {styles.button}>
          <Text style={styles.text}>
            forgot password ?
          </Text>
        </TouchableOpacity>
        {errors.submit &&
        <Text style={styles.error}>
          {errors.submit}
        </Text>
        }
        <FacebookButton onPress={this.onSubmitFacebook}/>
      </View>
    );
  }
}

Form.propTypes = {
  onSubmit: React.PropTypes.func.isRequired,
  onSubmitFacebook: React.PropTypes.func.isRequired,
  errors: React.PropTypes.object.isRequired
};

export default Form;
