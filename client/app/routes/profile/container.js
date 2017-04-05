import React, {Component} from 'react';

import {Logout} from '../../actions';
import Scene from './scene';

class Container extends Component {
  logout = () => {
    Logout();
  };
  render() {
    return (
      <Scene logout={this.logout}/>
    );
  }
}

export default Container;
