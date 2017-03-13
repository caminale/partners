import React, {Component} from 'react';

import Scene from './scene';
import LoginAction from '../../actions/users/login';
import RegisterAction from '../../actions/users/register';


class Container extends Component {
  loginHandler = creds => {
    return LoginAction(creds);
  };
    registerHandler = creds => {console.log('pouli')

      return RegisterAction(creds);
  };
  render() {
    return (
      <Scene onSubmit={this.loginHandler}
             onSubmit1={this.registerHandler}/>

    );
  }
}

export default Container;
