import React, {Component} from 'react';
import {View} from 'react-native';
import Meteor from 'react-native-meteor';

import Scene from './scene';
import {AddPost, SubscribePosts} from '../../actions';

export default class AboutContainer extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
    SubscribePosts(this.props.data.conversation._id);
    this.state = {
      currentUser: Meteor.user().username,
      foreignUser: this.props.data.foreignUser
    }
  }

  openProfile = p_foreignUser => {
    this.props.navigator.push({
      name: 'profile',
      passProps: {
          foreignUser: p_foreignUser
      }
    });
  };

  goBack = () => {
    this.props.navigator.pop();
  };
  addPostHandler = post => {
    return AddPost(post);
  };

  render() {
    return (
      <Scene
        conversation={this.props.data.conversation}
        currentUser={this.state.currentUser}
        foreignUser={this.state.foreignUser}
        goBack={this.goBack}
        onAddPost={this.addPostHandler}
        openProfile={this.openProfile}
        />
    );
  }
}
