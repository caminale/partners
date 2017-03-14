import React, {Component} from 'react';

import Scene from './scene';
import LoginAction from '../../actions/users/login';

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
  render() {
    return (
      <Scene
        onSubmit={this.loginHandler}
        goBack={this.goBack}
      />
    );
  }
}

export default Container;
