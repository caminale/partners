import React, {Component} from 'react';
import {Scene, Router} from 'react-native-router-flux';

import Home from './routes/home/container';
import About from './routes/about/container';

export default class RouterApp extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="home" component={Home} title="Home"/>
          <Scene key="about" component={About} title="About"/>
        </Scene>
      </Router>
    );
  }
}
