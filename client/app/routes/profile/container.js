import React, {Component} from 'react';

import Scene from './scene';

import {Logout} from '../../actions';

class Container extends Component {
  logout() {
    Logout();
  }
  render() {
    return (
      <Scene
        logout={this.logout}
      />
    );
  }
}

export default Container;
