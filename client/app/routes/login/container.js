import React, {Component} from 'react';

import Scene from './scene';
import LoginAction from '../../actions/users/login';

class Container extends Component {
  loginHandler = creds => {
    LoginAction(creds);
  };
  render() {
    return (
      <Scene onSubmit={this.loginHandler}/>
    );
  }
}

export default Container;
