import React from 'react';
import ReactNative from 'react-native';
import MaterialsIcon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Kohana} from 'react-native-textinput-effects';

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
      <View >
        <View style={styles.container}>
          <Kohana
            style={styles.input}
            label={'username'}
            iconClass={FontAwesome}
            iconName={'user-circle'}
            iconColor={'#3c918c'}
            labelStyle={{color: '#3c918c'}}
            inputStyle={{color: '#3c918c'}}
            onChangeText={this.setUsername}
          />
        </View>
        <View>
          {errors.username &&
          <Text style={styles.error}>
            {errors.username}
          </Text>
          }
          <Text style={styles.text}/>
        </View>
        <View style={styles.container}>
          <Kohana
            style={styles.input}
            label={'e-mail'}
            iconClass={FontAwesome}
            iconName={'user-circle'}
            iconColor={'#3c918c'}
            labelStyle={{color: '#3c918c'}}
            inputStyle={{color: '#3c918c'}}
            onChangeText={this.setEmail}
          />
        </View>
        <View >
          {errors.email &&
          <Text
            style={styles.error}
          >
            {errors.email}
          </Text>
          }
          <Text style={styles.text}/>
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
            secureTextEntry
            onChangeText={this.setPassword}
          />
        </View>
        <View>
          {errors.password &&
          <Text style={styles.error}>
            {errors.password}
          </Text>
          }
        </View>
        <View style={styles.container}>

          <Kohana
            style={styles.input}
            label={'confirm password'}
            iconClass={MaterialsIcon}
            iconName={'https'}
            iconColor={'#3c918c'}
            labelStyle={{color: '#3c918c'}}
            inputStyle={{color: '#3c918c'}}
            secureTextEntry
            onChangeText={this.setConfPassword}
          />
        </View>
        <View>
          {errors.confPassword &&
          <Text style={styles.error}>
            {errors.confPassword}
          </Text>
          }
        </View>
        <Text>
          {'\n'}
        </Text>
        <View>
          <TouchableOpacity
            onPress={this.onSubmit}
            style={styles.button}>
            <Text style={styles.text}>
              Register
            </Text>
          </TouchableOpacity>

          {errors.submit &&
          <Text style={styles.error}>
            {errors.submit}
          </Text>
          }
        </View>
      </View>
    );
  }
}

Form.propTypes = {
  onSubmit: React.PropTypes.func.isRequired,
  errors: React.PropTypes.object.isRequired
};

export default Form;
