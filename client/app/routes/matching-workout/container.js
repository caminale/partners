import React, {Component} from 'react';
import {Navigator} from 'react-native';
import Meteor from 'react-native-meteor';

import Scene from './scene';


class Container extends Component {

  constructor(props) {
    super(props);
  }
  nextForm = informations => {


  };

  render() {

    return (

      <Scene onSubmit={this.nextForm}/>
    );
  }

}
export default Container;
