import React, {Component} from 'react';
import Meteor from 'react-native-meteor';

import {Logout} from '../../actions';
import Scene from './scene';

class Container extends Component {

  logout = () => {
    Logout();             //Appel de l'acion Logout
  };
  goBack = () => {
    this.props.navigator.pop();
  };
  updateInfos = info => {
    Meteor.call('updateweight', info.info);
    this.props.navigator.push({
      name: 'main'
    });
  };
  submitDescription = description => {
    Meteor.call('updateDescription', description.info);
    this.props.navigator.push({
      name: 'main'
    });
  };
  changeInfoTraining = () => {
    this.props.navigator.push({
      name: 'settingspicker'
    });
  };

  render() {
    return (
      <Scene logout={this.logout}
             goBack={this.goBack}
             updateInfos={this.updateInfos}
             changeInfoTraining={this.changeInfoTraining}
             submitDescription={this.submitDescription}/>
    );
  }
}

export default Container;
