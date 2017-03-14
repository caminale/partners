import React, {Component} from 'react';

import Scene from './scene';
import RegisterAction from '../../actions/users/register';

class Container extends Component {
  constructor() {
    super();
    this.goBack = this.goBack.bind(this);
  }
  goBack() {
    this.props.navigator.pop();
  }
  registerHandler = creds => {
    return RegisterAction(creds);
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
