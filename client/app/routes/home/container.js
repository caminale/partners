import React, {Component} from 'react';
import {Navigator} from 'react-native';

import Scene from './scene';

class Container extends Component {
  constructor() {
    super();
    this.navigate = this.navigate.bind(this);
  }
  navigate(name) {          //Appel de la methode push du navigateur passé en paramètre du composant
    this.props.navigator.push({
      name
    });
  }
  render() {                    //Appel de la scene en lui passant un accès à la fonction navigate plus haut
    return <Scene navigate={this.navigate}/>;
  }
}

Container.propTypes = {               // ????
  navigator: React.PropTypes.instanceOf(Navigator).isRequired
};

export default Container;
