import React, {Component} from 'react';
import Meteor from 'react-native-meteor';
import Scene from './scene'

class Container extends Component {

  constructor(props) {
    super(props);
  }

  openProfile = (p_foreignUser) => { //for get props on navigator

    this.props.navigator.push({
      name: 'ProfileAfterNotification',
      passProps: {
        user: p_foreignUser
      }
    });
  };
  goBack = () => { //for get props on navigator
    this.props.navigator.pop();
  };
  render() {
    return (
      <Scene openProfile={this.openProfile}
             goBack={this.goBack}
      />
    );
  }
}

export default Container;
