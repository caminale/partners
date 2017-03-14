import React, {Component} from 'react';
import ReactNative from 'react-native';
import Routes from '../../routes';

const {Navigator} = ReactNative;
const {Login, Home, Register} = Routes;

class Layout extends Component {
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

export default Layout;
