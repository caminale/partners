import React, { AsyncStorage } from 'react';
import ReactNative from 'react-native';
import MaterialsIcon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Kohana} from 'react-native-textinput-effects';
import FBSDK, {LoginButton} from 'react-native-fbsdk';
import {AccessToken} from 'react-native-fbsdk';
import Meteor from 'react-native-meteor';


import styles from './styles';

const {
  View,
  Text,
  TextInput,
  TouchableOpacity
} = ReactNative;

const USER_TOKEN_KEY = 'reactnativemeteor_usertoken';

export const loginWithTokens = () => {
  const Data = Meteor.getData();
  AccessToken.getCurrentAccessToken()
    .then((res) => {
      if (res) {
        Meteor.call('login', { facebook: res }, (err, result) => {
          if(!err) {//save user id and token
            AsyncStorage.setItem(USER_TOKEN_KEY, result.token);
            Data._tokenIdSaved = result.token;
            Meteor._userIdSaved = result.id;
          }
        });
      }
    });
};

// {email:'keke@gmail.com', password: 'a123456'}
export const onLoginFinished = (error, result) => {
  if (error) {
    console.log('login error', error);
  } else if (result.isCancelled) {
    console.log('login cancelled');
  } else {
    loginWithTokens();
  }
};

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  render() {
    const {onSubmit, errors} = this.props;

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
        <LoginButton
          publishPermissions={["publish_actions"]}
          onLoginFinished={onLoginFinished}
          onLogoutFinished={() => alert("logout.")}/>

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
      </View>
    );
  }
}

export default Form;
