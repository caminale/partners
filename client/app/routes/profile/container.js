import React, {Component} from 'react';

import Scene from './scene';
import LogoutAction from '../../actions/users/logout';

class Container extends Component {
  logout() {
    LogoutAction();
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
