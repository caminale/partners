import React, {Component} from 'react';
import ReactNative from 'react-native';
import Meteor, {MeteorListView} from 'react-native-meteor';

import {Button} from '../../components';
import styles from './styles';

const {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity
} = ReactNative;

class Scene extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      author: '',
    };
  }
  openProfile = p_foreignUser => {
    console.log(p_foreignUser)
    this.props.openProfile(p_foreignUser);
  };

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
    const partner = this.props.foreignUser;
    const currentUsername = Meteor.user().profile.firstName;
    return (
      <View style={styles.container}>
        <View style={styles.headerWrap}>
        <View style={styles.backButton}>
          <Button onPress={goBack}
                  label={'back'}/>
        </View>
          <TouchableOpacity
            onPress={() => this.openProfile(partner)}
          >
        <Text style={styles.header}>{currentUsername}</Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          <MeteorListView
            collection="posts"
            selector={{conversationId: this.props.conversation._id}}
            enableEmptySections
            renderRow={this.renderItem}
          />
        </ScrollView>
        <View style={styles.textInputButton}>
          <TextInput
            style={{width: 250}}
            multiline={true}
            onChangeText={this.setMessage}
            placeholder={'send message'}/>
          <Button onPress={this.onAddPost}
                  label={'Send'}/>
        </View>
      </View>
    );
  }
}

export default Scene;

