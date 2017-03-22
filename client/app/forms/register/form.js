import React from 'react';
import ReactNative from 'react-native';
import MaterialsIcon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Kohana} from 'react-native-textinput-effects';
const {
  View,
  Text,
  TouchableOpacity
} = ReactNative;

import styles from './styles';


class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      username: '',
      password: '',
      passwordConfirm: ''
    }

  }

  render() {
    const {onSubmit, errors} = this.props;

    return (

      <View >
        <View style={styles.container}>

          <Kohana
            style={styles.input1}
            label={'username'}
            iconClass={FontAwesome}
            iconName={'user-circle'}
            iconColor={'#3c918c'}
            labelStyle={{color: '#3c918c'}}
            inputStyle={{color: '#3c918c'}}
            onChangeText={username => this.setState({username})}

          />
        </View>
        <View >


        </View>
        <View style={styles.container}>

          <Kohana
            style={styles.input1}
            label={'e-mail'}
            iconClass={FontAwesome}
            iconName={'user-circle'}
            iconColor={'#3c918c'}
            labelStyle={{color: '#3c918c'}}
            inputStyle={{color: '#3c918c'}}
            onChangeText={email => this.setState({email})}

          />
        </View>

        <View style={styles.container}>

          <Kohana
            style={styles.input2}
            label={'password'}
            iconClass={MaterialsIcon}
            iconName={'https'}
            iconColor={'#3c918c'}
            labelStyle={{color: '#3c918c'}}
            inputStyle={{color: '#3c918c'}}
            secureTextEntry={true}
            onChangeText={password => this.setState({password})}

          />
        </View>
        <View >


        </View>
        <View style={styles.container}>

          <Kohana
            style={styles.input1}
            label={'confirm password'}
            iconClass={MaterialsIcon}
            iconName={'https'}
            iconColor={'#3c918c'}
            labelStyle={{color: '#3c918c'}}
            inputStyle={{color: '#3c918c'}}
            secureTextEntry={true}
            onChangeText={passwordConfirm => this.setState({passwordConfirm})}

          />
        </View>
        <View >

          {errors.username &&
          <Text
            style={styles.error}>
            {errors.username}
          </Text>
          }

          {errors.email &&
          <Text
            style={styles.error}>
            {errors.email}
          </Text>
          }
        </View>

        <View >


          {errors.password &&
          <Text
            style={styles.error}>
            {errors.password}
          </Text>
          }

          {errors.passwordConfirm &&
          <Text
            style={styles.error}>
            {errors.passwordConfirm}
          </Text>
          }


        </View>
        <View >

          <TouchableOpacity
            onPress={() => onSubmit(this.state)}
            style={styles.button}>
            <Text style={styles.text}>
              Register
            </Text>
          </TouchableOpacity>

          {errors.submit &&
          <Text
            style={styles.error}>
            {errors.submit}
          </Text>
          }
        </View>
      </View>

    );
  }
}

export default Form;
