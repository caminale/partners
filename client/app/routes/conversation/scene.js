import React, {Component} from 'react';
import ReactNative from 'react-native';
import Meteor, {MeteorListView} from 'react-native-meteor';

import styles from './styles';

const {
  View,
  Text,
  TextInput,
  TouchableOpacity
} = ReactNative;

class Scene extends Component {
  constructor() {
    super();
    Meteor.subscribe('posts');
    this.state = {
      message: ''
    };
  }

  onAddPost() {
    Meteor.call('addPost', 'azeeerr', this.state.message);
  }

  renderHeader() {
    return <Text style={styles.header}>Posts</Text>;
  }

  renderItem(post) {
    return (
      <View>
        <Text>{post.message}</Text>
      </View>
    );
  }

  render() {
    return (
      <View>
        <Text style={styles.postTitle}>
          Ici il y a aura une conversation
        </Text>
        <MeteorListView
          collection='posts'
          enableEmptySections={true}
          renderRow={this.renderItem.bind(this)}
          renderHeader={this.renderHeader}
        />
        <TouchableOpacity style={styles.button}
                          onPress={() => this.onAddPost()}>
          <Text>Send</Text>
        </TouchableOpacity>
        <TextInput
          onChangeText={message => this.setState({message})}
          autoFocus={true}
          placeholder={'send message'}/>
      </View>
    );
  }
}

export default Scene;
