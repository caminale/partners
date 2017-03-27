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
      email: '',
      password: ''
    };
  }
  onSubmit = () => {
    this.props.onSubmit(this.state);
  };
  onSubmitFacebook = () => {
    this.props.onSubmitFacebook();
  };
  setEmail = email => {
    this.setState({email});
  };
  setPassword = password => {
    this.setState({password});
  };
  render() {
    const {errors} = this.props;

    return (
      <View style={styles.container}>
        <Kohana
          style={styles.withShadow}
          label={'e-mail'}
          height={40}
          iconClass={FontAwesome}
          iconName={'user-circle'}
          iconColor={'#3c918c'}
          labelStyle={{color: '#3c918c'}}
          inputStyle={{color: '#3c918c'}}
          onChangeText={this.setEmail}
        />
        {errors.email &&
        <Text style={styles.error}>
          {errors.email}
        </Text>
        }
        <Text style={styles.text}>
          {'\n'}
        </Text>
        <Kohana
          style={{backgroundColor: '#f9ebd8'}}
          label={'password'}
          iconClass={MaterialsIcon}
          iconName={'https'}
          iconColor={'#3c918c'}
          labelStyle={{color: '#3c918c'}}
          inputStyle={{color: '#3c918c'}}
          onChangeText={this.setPassword}
          secureTextEntry
        />
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
