import React, {Component} from 'react';
import ReactNative from 'react-native';
import Meteor, {MeteorListView} from 'react-native-meteor';
import { GiftedChat } from 'react-native-gifted-chat';

import styles from './styles';

const {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView
} = ReactNative;

class Scene extends Component {
  constructor() {
    super();

    Meteor.subscribe('posts');
    this.state = {
      message: '',
      author:'',
    };
  }
  setMessage = message => {
    this.setState({message});
  };
  getMessages() {
    return [
      {text: 'Are you building a chat app?', name: 'React-Native', image: {uri: 'https://facebook.github.io/react/img/logo_og.png'}, position: 'left', date: new Date(2015, 0, 16, 19, 0)},
      {text: "Yes, and I use Gifted Messenger!", name: 'Developer', image: null, position: 'right', date: new Date(2015, 0, 17, 19, 0)},
    ];
  }
  onAddPost = () => {         //Envois du message à meteor
    Meteor.call('addPost', 'azeeerr', this.state.message);
  };
  renderHeader = () => {
    return <Text style={styles.header}>Posts</Text>;
  };
  renderItem = post => {
    let currentUser=Meteor.user().username
    if(post.author===currentUser) {
      return (
      <GiftedChat
        messages={this.getMessages()}


      />
        // <View style={styles.messageWrap}>
        //   <Text style={styles.ourTextStyle}>{post.message}</Text>
        //   <Text style={styles.authorStyle}>{post.author}</Text>
        // </View>
      );
    }
    else {
      return (
        <View style={styles.messageWrap}>
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
