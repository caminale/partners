import React, {Component} from 'react';

import Scene from './scene';
import {Login, LoginFacebook} from '../../actions';

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
  render() {
    return (
      <Scene
        onSubmit={this.loginHandler}
        onSubmitFacebook={this.loginFacebookHandler}
        goBack={this.goBack}
      />
    );
  }
}

export default Container;
