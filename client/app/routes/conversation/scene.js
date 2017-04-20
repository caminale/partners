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
    this.state = {
      message: '',
      author: '',
    };
  }

  setMessage = message => {
    this.setState({message});
  };
  onAddPost = () => {
    const post = {
      message: this.state.message,
      conversationId: this.props.conversation._id
    };
    this.props.onAddPost(post);
  };
  renderHeader = () => {
    return <Text style={styles.header}>Posts</Text>;
  };
  renderItem = post => {
    const currentUser = Meteor.user()._id;
    if (post.author === currentUser) {
      return (
        <View style={styles.userMessageWrap}>
          <Text style={styles.ourTextStyle}>{post.message}</Text>
        </View>
      );
    }
    else {
      return (
        <View style={styles.foreignMessageWrap}>
          <Text style={styles.TextStyle}>{post.message}</Text>
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
        <MeteorListView                     //Liste des messages dans le serveur meteor, composant natif
          collection="posts"
          selector={{conversationId: this.props.conversation._id}}
          enableEmptySections
          renderRow={this.renderItem}
          renderHeader={this.renderHeader}/>
        <TouchableOpacity
          style={styles.button} //Appel de la fonction onAddPost pour envoyer un message
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
