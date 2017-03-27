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
    Meteor.subscribe('conversations');
  }
  onAddRoom = ({title, description}) => {
    Meteor.call('addConversation', title, description);
  };
  renderHeader = () => {
    return <Text style={styles.header}>Conversations</Text>;
  };
  renderItem = conversation => {
    return (
      <TouchableOpacity onPress={() => this.props.selectConversation(conversation)}>
        <View style={styles.row}>
          <Text style={styles.conversationTitle}>{conversation.title}</Text>
          <Text>{conversation.description}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => this.onAddRoom({title: 'Conv1', description: 'blabla'})}>
          <Text style={styles.conversationTitle}>Add conversation</Text>
        </TouchableOpacity>
        <MeteorListView
          collection="conversations"
          enableEmptySections
          renderRow={this.renderItem}
          renderHeader={this.renderHeader}
          />
      </View>
    );
  }
}

export default Scene;
