import React, {Component} from 'react';
import Meteor, {createContainer} from 'react-native-meteor';

import settings from './configs/settings';

import Loading from './components/loading';
import LoggedIn from './layouts/logged-in';
import LoggedOut from './layouts/logged-out';

Meteor.connect(settings.METEOR_URL);

class App extends Component {
  render() {
    const {status, user, loggingIn} = this.props;
    if (status.connected === false) {
      // Waiting the connection with meteor
      return <Loading />;
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
    var myvar = 5;
    status: Meteor.status(),
    user: Meteor.user(),
    loggingIn: Meteor.loggingIn(),
  };
}, App);
