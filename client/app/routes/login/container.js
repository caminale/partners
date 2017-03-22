import React, {Component} from 'react';

import Scene from './scene';

import {Login, LoginFacebook, ResetPassword} from '../../actions';

class Container extends Component {
  constructor() {
    super();
    this.goBack = this.goBack.bind(this);
  }
  goBack() {
    this.props.navigator.pop();
  }
  loginHandler = creds => {
    return Login(creds);
  };
  loginFacebookHandler = () => {
    return LoginFacebook();
  };
  forgotHandler = creds => {
    return ResetPassword(creds);
  };
  render() {
    return (
      <Scene
        onSubmit={this.loginHandler}
        onForgot={this.forgotHandler}
        onSubmitFacebook={this.loginFacebookHandler}
        goBack={this.goBack}
      />
    );
  }
}

export default Container;
