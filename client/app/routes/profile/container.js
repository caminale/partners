import React, {Component} from 'react';
import Meteor from 'react-native-meteor';

import Scene from './scene';

class Container extends Component {

  openSettings = () => {
    this.props.navigator.push({
      name: 'settings'
    });
  };
  submitDescription = description => {
    Meteor.call('updateDescription', description.text);
  };
  addStats = () => {

    this.props.navigator.push({
      name: 'addstats'
    });
  };
  notif = () => {

  };

  render() {
    return (
      <Scene openSettings={this.openSettings}
             onSubmitDescription={this.submitDescription}
             addStats={this.addStats}
      onReceivedNotif={this.notif}/>
    );
  }
}

export default Container;
