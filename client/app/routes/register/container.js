import React, {Component} from 'react';

import Scene from './scene';

import {Register} from '../../actions';

class Container extends Component {
  constructor() {
    super();
    this.goBack = this.goBack.bind(this);
  }
  goBack() {
    this.props.navigator.pop();
  }
  registerHandler = creds => {
    return Register(creds);
  };
  render() {
    return (
      <Scene
        onSubmit={this.registerHandler}
        goBack={this.goBack}
      />
    );
  }

}

export default Container;
