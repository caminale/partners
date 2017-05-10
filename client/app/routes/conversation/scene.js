import React, {Component} from 'react';
import ReactNative from 'react-native';
import Meteor, {MeteorListView} from 'react-native-meteor';

import {Button} from '../../components';
import styles from './styles';

const {
  View,
  Text,
  ScrollView,
  TextInput
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
    const currentUsername = Meteor.user().profile.firstName;
    console.log(currentUsername);
    return <Text style={styles.header}>{currentUsername}</Text>;
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
      <View style={styles.container}>
        <View>
          <Button onPress={goBack}
                  label={'back'}/>
          <ScrollView>
            <MeteorListView                     //Liste des messages dans le serveur meteor, composant natif
              collection="posts"
              selector={{conversationId: this.props.conversation._id}}
              enableEmptySections
              renderRow={this.renderItem}
              renderHeader={this.renderHeader}/>
          </ScrollView>
        </View>
          <TextInput
            onChangeText={this.setMessage}
            autoFocus={true}
            placeholder={'send message'}/>
          <Button onPress={this.onAddPost}
                  label={'Send'}/>
        </View>
    );
  }
}

export default Scene;
// si la conv n'est pas créé des 2 cotés éssayer de changer le selector
// et de trier user : Meteor.user._id
//    selector={{conversationId: this.props.conversation._id}}