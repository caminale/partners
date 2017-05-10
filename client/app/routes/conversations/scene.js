import React, {Component} from 'react';
import ReactNative from 'react-native';
import Meteor, {MeteorListView} from 'react-native-meteor';

import styles from './styles';

const {
  View,
  Text,
  TouchableOpacity
} = ReactNative;

class Scene extends Component {
  constructor() {
    super();
    Meteor.subscribe('chats',Meteor.user()._id);
  }

  renderHeader() {

    return <Text style={styles.header}>Conversations </Text>;
  };

  renderItem = conversation => {
    return (
      <TouchableOpacity
        onPress={() => this.props.selectConversation(conversation)}>
        <View style={styles.row}>
          <Text style={styles.conversationTitle}>{conversation.title}</Text>
          <Text>{conversation.description}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    const userId= Meteor.user()._id;
    return (
      <View>
        <MeteorListView
          collection="chats"
          selector={{users: userId}}
          enableEmptySections
          renderRow={this.renderItem}
          renderHeader={this.renderHeader}
        />
      </View>
    );
  }
}

export default Scene;
