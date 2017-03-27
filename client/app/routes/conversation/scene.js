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
    Meteor.subscribe('posts');
    this.state = {
      message: 'Coucou'
    };
  }
  onAddPost = () => {
    Meteor.call('addPost', 'azeeerr', this.state.message);
  };
  renderHeader = () => {
    return <Text style={styles.header}>Posts</Text>;
  };
  renderItem = post => {
    return (
      <View>
        <Text>{post.message}</Text>
      </View>
    );
  };
  render() {
    return (
      <View>
        <Text style={styles.postTitle}>
          Ici il y a aura une conversation
        </Text>
        <MeteorListView
          collection="posts"
          enableEmptySections
          renderRow={this.renderItem}
          renderHeader={this.renderHeader}
          />
        <TouchableOpacity onPress={this.onAddPost}>
          <Text>Send</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Scene;
