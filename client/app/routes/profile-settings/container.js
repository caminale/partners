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
    console.log('salut');
      Meteor.call('updateweight', info.info);
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
      changeInfoTraining={this.changeInfoTraining}/>
    );
  }
}

export default Container;
