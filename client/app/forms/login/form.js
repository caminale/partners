import React from 'react';
import ReactNative from 'react-native';
const {
  View,
  Text,
  TextInput,
  TouchableOpacity
} = ReactNative;

import styles from './styles';

class Form extends React.Component {
  render() {
    const {onSubmit} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.texte}>
          Address Mail
        </Text>
        <TextInput
          style={styles.input}
          keyBoardType="email-address"
          placeholder="Entrez votre adresse mail"
        />
        <Text style={styles.text}>
          Mot De Passe
          {'\n'}
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Entrez votre Mot De Passe"
          secureTextEntry={true}
        />
        <Text>
          {'\n'}
        </Text>
        <TouchableOpacity
          style = {styles.button}
          onPress = {handleSubmit(this.state)}>
          onPress={() => onSubmit({email:'keke@gmail.com', password: 'a123456'})}
          style = {styles.button}>
          <Text>
            Se connecter
          </Text>
        </TouchableOpacity>

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
