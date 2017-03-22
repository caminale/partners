import React, {Component} from 'react';

import Scene from './scene';
import LoginAction from '../../actions/users/login';
import forgotAction from '../../actions/users/forgot';


class Container extends Component {
  constructor() {
    super();
    this.goBack = this.goBack.bind(this);
  }
  goBack() {
    this.props.navigator.pop();
  }
  loginHandler = creds => {
    return LoginAction(creds);
  };
  forgotHandler = creds => {

    return forgotAction(creds);
  };
  render() {
    return (
      <Scene
        onSubmit={this.loginHandler}
        onForgot={this.forgotHandler}

        goBack={this.goBack}
      />
    );
  }
}

export default Container;
