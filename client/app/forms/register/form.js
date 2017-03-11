import React from 'react';
import ReactNative from 'react-native';
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
      password: '',
    };
  }
  render() {
    const {handleSubmit} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.texte}>
          Address Mail
        </Text>
        <TextInput
          style={{height: 40,width:180, borderColor: 'gray', borderWidth: 3}}
          keyBoardType="email-address"
          onChangeText={(email) => this.setState({email})}
          placeholder="Entrez votre adresse mail"
        />

        <Text style={styles.texte}>
          Pseudo
        </Text>
        <TextInput
          style={{height: 40,width:180, borderColor: 'gray', borderWidth: 3}}
          placeholder="Entrez votre pseudo"
        />
        <Text style={styles.texte}>
          Mot De Passe
        </Text>
        <TextInput
          style={{height: 40,width:180, borderColor: 'gray', borderWidth: 3}}
          placeholder="Entrez votre Mot De Passe"
          onChangeText={(password) => this.setState({password})}
          secureTextEntry={true}
        />

        <Text>
          {'\n'}
        </Text>

        <TouchableOpacity
          style = {styles.button}
          onPress = {handleSubmit(this.state)}>
          <Text>
            S'inscrire
          </Text>
        </TouchableOpacity>

      </View>
    );
  }
}

export default Form;
