import React from 'react';
import ReactNative from 'react-native';
import MaterialsIcon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Kohana} from 'react-native-textinput-effects';

import styles from './styles';
import FacebookButton from '../../components/facebook-button';

const {
  View,
  Text,
  TouchableOpacity
} = ReactNative;

// {email:'keke@gmail.com', password: 'a123456'}
class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }
  render() {
    const {onSubmit, onLoginFacebook, errors} = this.props;

    return (
      <View style={styles.container}>

        <Kohana
          style={styles.withShadow}
          label={'e-mail'}
          height={40}
          iconClass={FontAwesome}
          iconName={'user-circle'}
          iconColor={'#3c918c'}
          labelStyle={{ color: '#3c918c' }}
          inputStyle={{ color: '#3c918c' }}
          onChangeText={email => this.setState({email})}
        />

        {errors.email &&
        <Text
          style={styles.error}>
          {errors.email}
        </Text>
        }
        <Text style={styles.text}>
          {'\n'}
        </Text>
        <Kohana
          style={{ backgroundColor: '#f9ebd8' }}
          label={'password'}
          iconClass={MaterialsIcon}
          iconName={'https'}
          iconColor={'#3c918c'}
          labelStyle={{ color: '#3c918c' }}
          inputStyle={{ color: '#3c918c' }}
          onChangeText={password => this.setState({password})}
        />
        {errors.password &&
        <Text
          style={styles.error}>
          {errors.password}
        </Text>
        }
        <Text>
          {'\n'}
        </Text>

        <TouchableOpacity
          onPress={() => onSubmit(this.state)}
          style = {styles.button}>
          <Text style={styles.text}>
            Login
          </Text>
        </TouchableOpacity>
        {errors.submit &&
        <Text
          style={styles.error}>
          {errors.submit}
        </Text>
        }
        <FacebookButton
          onLoginFacebook={onLoginFacebook}/>
      </View>
    );
  }
}

export default Form;
