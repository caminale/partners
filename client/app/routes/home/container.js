import React, {Component} from 'react';
import {View} from 'react-native';

import Scene from './scene';

export default class AboutContainer extends Component {
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
