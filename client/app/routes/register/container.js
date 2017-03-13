import React, {Component} from 'react';

import Scene from './scene';
import RegisterAction from '../../actions/users/register';

class Container extends Component {
  registerHandler = creds => {
    return RegisterAction(creds);
  };
  render() {
    return (
      <Scene onSubmit2={this.registerHandler}/>

    );
  }
}

export default Container;
