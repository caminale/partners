import React, {Component} from 'react';
import Scene from './scene';
import Meteor from 'react-native-meteor';


class Container extends Component {

  constructor(props) {
    super(props);
  }
  nextForm = informations => {

    const personalInfos = {
      firstName: informations.fName,
      gender: informations.gender,
      age: informations.age,
      weight: informations.weight,
      height: informations.height

    };
    Meteor.call('updateProfile', personalInfos);
    this.props.navigator.push({
      name: 'workout'
    });

  };

  render() {

    return (

      <Scene onSubmit={this.nextForm}/>
    );
  }

}
export default Container;
