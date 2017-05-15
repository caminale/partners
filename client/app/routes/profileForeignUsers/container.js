import React, {Component} from 'react';
import Meteor from 'react-native-meteor';

import Scene from './scene';

class Container extends Component {

  goBack = () => { //for get props on navigator
    this.props.navigator.popN(2);
  };
  render() {
    return (
      <Scene goBack={this.goBack}
      />
    );
  }
}


export default Container;
