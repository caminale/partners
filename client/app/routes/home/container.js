import React, {Component} from 'react';
import {Navigator} from 'react-native';

import Scene from './scene';

class Container extends Component {
  constructor() {
    super();
    this.navigate = this.navigate.bind(this);
  }
  navigate(name) {
    this.props.navigator.push({
      name
    });
  }
  render() {
    return <Scene navigate={this.navigate}/>;
  }
}

Container.propTypes = {
  navigator: React.PropTypes.instanceOf(Navigator).isRequired
};

export default Container;
