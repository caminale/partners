import React, {Component} from 'react';
import {Navigator} from 'react-native';

import {Conversation, Conversations} from '../../routes';

class MyNavigator extends Component {
  constructor() {
    super();
    this.renderScene = this.renderScene.bind(this);
  }
  renderScene(route, navigator) {
    switch (route.name) {
      case 'conversation':
        return <Conversation navigator={navigator}/>;
      case 'conversations':
        return <Conversations navigator={navigator}/>;
      default:
        console.log(route.name);
    }
  }
  render() {
    return (
      <Navigator
        initialRoute={{name: 'conversations'}}
        renderScene={this.renderScene}
        />
    );
  }
}

export default MyNavigator;
