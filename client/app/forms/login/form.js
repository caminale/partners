import React from 'react';
import ReactNative from 'react-native';
const {
  View,
  Text,
  TextInput,
  TouchableOpacity
} = ReactNative;

import styles from './styles';

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
    const {onSubmit, errors} = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.texte}>
          Address Mail
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={email => this.setState({email})}
          keyBoardType="email-address"
          placeholder="Entrez votre adresse mail"
        />
        {errors.email &&
        <Text
          style={styles.error}>
          {errors.email}
        </Text>
        }
        <Text style={styles.text}>
          Mot De Passe
          {'\n'}
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={password => this.setState({password})}
          placeholder="Entrez votre Mot De Passe"
          secureTextEntry={true}
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
          <Text>
            Se connecter
          </Text>
        </TouchableOpacity>
        {errors.submit &&
        <Text
          style={styles.error}>
          {errors.submit}
        </Text>
        }

        <Text style={styles.texte}>
          OU
        </Text>

        <TouchableOpacity
          style = {styles.button}
          onPress = {handleSubmit(this.state)}>
          style = {styles.button}>
          <Text>
            S'inscrire
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Form;
