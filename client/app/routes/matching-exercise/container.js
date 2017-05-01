import React, {Component} from 'react';
import Meteor from 'react-native-meteor';

import Scene from './scene';
import {Navigator} from 'react-native';

class Container extends Component {
  constructor(props) {
    super(props);
  }

  nextForm = stats => {
    const statsBP = {
      weight: stats.benchPress,
      exerciseId: 'n5iCkhmR5ADkZPbNs'
    };
    const statsSQ = {
      weight: stats.squats,
      exerciseId: 'Z2asvxEdRRBWbanM8'
    };
    const statsPD = {
      weight: stats.pullDown,
      exerciseId: 'CrzMaxQ4qKLWZHKLa'
    };
    const statsD = {
      reps: stats.dips,
      exerciseId: '4AMqjmCqkhADgjmrS'
    };

    Meteor.call('addUserExoStats', statsBP);
    Meteor.call('addUserExoStats', statsSQ);
    Meteor.call('addUserExoStats', statsPD);
    Meteor.call('addUserExoStats', statsD);

    this.props.navigator.push({
      name: 'personal'
    });
  };

  render() {
    return (
      <Scene onSubmit={this.nextForm}/>
    );
  }
}
export default Container;
