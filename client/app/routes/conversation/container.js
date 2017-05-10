import React, {Component} from 'react';
import {View} from 'react-native';
import Meteor from 'react-native-meteor';

import Scene from './scene';
import {AddPost, SubscribePosts} from '../../actions';

export default class AboutContainer extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
    SubscribePosts(this.props.conversation._id);
    this.state = {
      currentUser: Meteor.user().username
    }
  }

  goBack = () => {
    this.props.navigator.pop();
  };
  addPostHandler = post => {
    return AddPost(post);
  };

  render() {
    return (
        <Scene
          conversation={this.props.conversation}
          currentUser={this.state.currentUser}
          goBack={this.goBack}
          onAddPost={this.addPostHandler}/>
    );
  }
}
