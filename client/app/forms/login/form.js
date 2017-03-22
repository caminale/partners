import React from 'react';
import ReactNative from 'react-native';
import MaterialsIcon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Kohana} from 'react-native-textinput-effects';

import styles from './styles';
import {FacebookButton} from '../../components';

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
    }
  }
  render() {

    const {onSubmit, onSubmitFacebook, onForgot, errors} = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.container1}>

          <Kohana
            style={styles.input1}
            label={'e-mail'}
            height={40}
            iconClass={FontAwesome}
            iconName={'user-circle'}
            iconColor={'#3c918c'}
            labelStyle={{ color: '#3c918c' }}
            inputStyle={{ color: '#3c918c' }}
            onChangeText={email => this.setState({email})}
          />
        </View>


        <Text style={styles.text}>
          {'\n'}
        </Text>
        <View style={styles.container1}>

          <Kohana
            style={styles.input1}
            label={'password'}
            iconClass={MaterialsIcon}
            iconName={'https'}
            iconColor={'#3c918c'}
            labelStyle={{ color: '#3c918c' }}
            inputStyle={{ color: '#3c918c' }}
            onChangeText={password => this.setState({password})}
            secureTextEntry={true}
          />
        </View>



        {errors.email &&
        <Text
          style={styles.error}>
          {errors.email}
        </Text>
        }
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
        <TouchableOpacity
          onPress={() => onForgot(this.state)}
          style = {styles.button}>
          <Text style={styles.text}>
            forgot password ?
          </Text>
        </TouchableOpacity>
        {errors.submit &&
        <Text
          style={styles.error}>
          {errors.submit}
        </Text>
        }
        <FacebookButton
          onPress={onSubmitFacebook}/>
      </View>
    );
  }
}

export default Form;
