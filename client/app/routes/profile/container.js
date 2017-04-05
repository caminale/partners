import React, {Component} from 'react';

import {Logout} from '../../actions';
import Scene from './scene';

class Container extends Component {
  logout = () => {
    Logout();             //Appel de l'acion Logout
  };
  render() {
    return (
      <Scene logout={this.logout}/>       //Passage de l'accès à la méthode définie plus haut
    );
  }
}

export default Container;
