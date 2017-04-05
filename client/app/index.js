import React, {Component} from 'react';
import Meteor, {createContainer} from 'react-native-meteor';

import settings from './configs/settings';
import {Start, Loading} from './components';
import {LoggedIn, LoggedOut} from './navigators';

Meteor.connect(settings.METEOR_URL);

class App extends Component {           //CLASSE APP
  render() {
    const {status, user} = this.props;
    if (status.connected === false) {
      // Waiting the connection with meteor
      return <Start/>;
    } else if (user !== null) {
      // Connected with meteor and logged in
      return <LoggedIn />;
    }
    // Connected with meteor but not logged in
    return <LoggedOut />;
  }
}

export default createContainer(() => {
  return {
    status: Meteor.status(),
    user: Meteor.user(),
    loggingIn: Meteor.loggingIn(),
  };
}, App);
