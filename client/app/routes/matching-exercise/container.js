import React, {Component} from 'react';
import Scene from './scene';
import {Navigator} from 'react-native';


class Container extends Component {

  constructor(props) {
    super(props);
  }


  nextForm = stats => {

    this.props.navigator.push({
      name: 'personal'
    });
  };

  render() {
      return (
        <Scene onSubmit={this.nextForm} />
      );

    }

}
export default Container;
