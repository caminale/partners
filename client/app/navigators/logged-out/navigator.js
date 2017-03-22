import React, {Component} from 'react';
import {Navigator} from 'react-native';

import {Login, Home, Register} from '../../routes';

class MyNavigator extends Component {
  constructor() {
    super();
    this.renderScene = this.renderScene.bind(this);
  }
  renderScene(route, navigator) {

    switch(route.name) {
      case 'home':
        return <Home navigator={navigator}/>;
      case 'login':
        return <Login navigator={navigator}/>;
      case 'register':
        return <Register navigator={navigator}/>;
      default:
        console.log(route.name);
    }
  }
  render() {
    return (
      <Navigator
        initialRoute={{name: 'home'}}
        renderScene={this.renderScene}/>
    );
  }
}

export default MyNavigator;
