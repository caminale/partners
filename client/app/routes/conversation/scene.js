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
  TouchableOpacity,
  Image
} = ReactNative;

class Scene extends Component {
  constructor(props) {
    super(props);
    this.clearText = this.clearText.bind(this);
    this.state = {
      message: '',
      author: '',
    };
  }

  openProfile = p_foreignUser => {
    console.log(p_foreignUser);
    this.props.openProfile(p_foreignUser);
  };

  setMessage = message => {
    this.setState({message});
  };
  onAddPost = () => {
    this.clearText();
    const post = {
      message: this.state.message,
      conversationId: this.props.conversation._id
    };
    this.props.onAddPost(post);
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
  clearText() {
    this._textInput.setNativeProps({text: ''});
  };

  render() {
    const {goBack} = this.props;
    const partner = this.props.foreignUser;
    const currentUsername = Meteor.user().profile.firstName;
    const currentPartnerName = partner.profile.firstName;
    return (
      <View style={styles.container}>
        <View style={styles.headerWrap}>
          <View style={styles.backButton}>
            <TouchableOpacity style={styles.button} onPress={goBack}>
              <Image source={require('../../images/iconBackW.png')}
                     style={{width: 30, height: 30}}/>
              <Text style={styles.buttonText}>go back</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => this.openProfile(partner)}>
            <View style={styles.partnerBut}>
            <Image
              source={{uri: partner.profile.picture}}
              style={styles.photo}/>
            <Text style={styles.header}>{currentPartnerName}</Text>
            </View>
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
            ref={component => this._textInput = component}
            style={{width: 250}}
            multiline={true}
            onChangeText={this.setMessage}
            placeholder={'send message'}/>
          <TouchableOpacity style={styles.button} onPress={this.onAddPost}>
            <Image source={require('../../images/iconSendMessage.png')}
                   style={{width: 30, height: 30}}/>
            <Text style={styles.buttonText}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Scene;

