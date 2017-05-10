import React, {Component} from 'react';
import Meteor from 'react-native-meteor';
import Scene from './scene'

class Container extends Component {
  constructor(props) {
    super(props);
  }
  openProfile = (p_foreignUserId) => { //for get props on navigator

    this.props.navigator.push({
      name: 'profilePartner',
      passProps: {
        foreignUserId: p_foreignUserId
      }
    });
  };
  openNotification = (p_foreignUserId)=> {
    this.props.navigator.push({
      name: 'notification',
      passProps: {
        foreignUserId: p_foreignUserId
      }
    });
  };


  render() {
    return (
      <Scene openProfile={this.openProfile}
             openNotification={this.openNotification}
      />
    );
  }
}

export default Container;