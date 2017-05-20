import React, {Component} from 'react';
import Meteor from 'react-native-meteor';

import Scene from './scene';

class Container extends Component {

  goBack = () => {
    this.props.navigator.pop();
  };

  updateStats = stats => {
if(stats.exerciseType === 'BenchPress')
{
  const weight = {
    exerciseId: "n5iCkhmR5ADkZPbNs",
    weight:  stats.exerciseWeight
  };
  Meteor.call('updateWeight', weight);
  this.props.navigator.pop();
}
else if(stats.exerciseType === 'Squats')
{
  const weight = {
    exerciseId: "Z2asvxEdRRBWbanM8",
    weight:  stats.exerciseWeight
  };
  Meteor.call('updateWeight', weight);
  this.props.navigator.pop();
}
else if(stats.exerciseType === 'PullDown')
{
  const weight = {
    exerciseId: "CrzMaxQ4qKLWZHKLa",
    weight:  stats.exerciseWeight
  };
  Meteor.call('updateWeight', weight);
  this.props.navigator.pop();
}
else if(stats.exerciseType === 'Dips')
{
  const reps = {
    exerciseId: "4AMqjmCqkhADgjmrS",
    reps:  stats.exerciseWeight
  };
  Meteor.call('updateReps', reps);
  this.props.navigator.pop();
}
  };


  render() {
    return (
      <Scene goBack={this.goBack}
             addStats={this.updateStats}/>
    );
  }
}

export default Container;
