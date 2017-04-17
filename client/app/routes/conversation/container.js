import React, {Component} from 'react';
import {View} from 'react-native';

import Scene from './scene';

export default class AboutContainer extends Component {
  constructor() {
    super();
    this.goBack = this.goBack.bind(this);
  }

  goBack = () => {
    this.props.navigator.pop();
  };
  render() {
    return (
      <View>
        <Scene goBack={this.goBack}
               conversation={this.props.conversation}/>
      </View>
    );
  }
}
