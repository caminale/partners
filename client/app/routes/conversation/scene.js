import React, {Component} from 'react';
import ReactNative from 'react-native';
import Meteor, {MeteorListView} from 'react-native-meteor';

import styles from './styles';

const {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView
} = ReactNative;

class Scene extends Component {
  constructor(props) {
    super(props);
    console.log('---------------------------');

    Meteor.subscribe('posts', this.props.conversation._id);
    this.state = {
      message: '',
      author: '',
    };
  }

  setMessage = message => {
    this.setState({message});
  };
  onAddPost = () => {         //Envois du message à meteor
    Meteor.call('addPost', {
      conversationId: this.props.conversation._id,
      message: this.state.message
    });
  };
  renderHeader = () => {
    return <Text style={styles.header}>Posts</Text>;
  };
  renderItem = post => {
    let currentUser = Meteor.user().username
    if (post.author === currentUser) {
      return (

        <View style={styles.userMessageWrap}>
          <Text style={styles.ourTextStyle}>{post.message}</Text>
          <Text style={styles.authorStyle}>{post.author}</Text>
        </View>
      );
    }
    else {
      return (
        <View style={styles.foreignMessageWrap}>
          <Text style={styles.TextStyle}>{post.message}</Text>
          <Text style={styles.authorStyle}>{post.author}</Text>
        </View>
      );
    }
  };

  render() {
    const {goBack} = this.props;
    return (
      <ScrollView>
        <TouchableOpacity
          style={styles.buttonBack}
          onPress={goBack}>
          <Text>BACK</Text>
        </TouchableOpacity>
        <Text style={styles.postTitle}>
          Ici il y a aura une conversation
        </Text>
        <MeteorListView                     //Liste des messages dans le serveur meteor, composant natif
          collection="posts"
          selector={{conversationId: this.props.conversation._id}}
          enableEmptySections
          renderRow={this.renderItem}
          renderHeader={this.renderHeader}
        />
        <TouchableOpacity
          style={styles.button}//Appel de la fonction onAddPost pour envoyer un message
          onPress={this.onAddPost}>
          <Text>Send</Text>
        </TouchableOpacity>
        <TextInput
          onChangeText={this.setMessage}
          autoFocus={true}
          placeholder={'send message'}/>
      </ScrollView>
    );
  }
}

export default Scene;
