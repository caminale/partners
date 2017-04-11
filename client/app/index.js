import React, {Component} from 'react';
import Meteor, {createContainer} from 'react-native-meteor';
import settings from './configs/settings';
import {Start, Loading} from './components';
import {LoggedIn, LoggedOut} from './navigators';

// MANQUE : login-facebook / form (login + registr avec validations etc..) / Tout le composant TabBar / scene de conversationS et conversasion
//  TOUTE LES ACTIONS + facebook-button /  Dossier config


Meteor.connect(settings.METEOR_URL);

class App extends Component {           //Connexion avec meteor, appel de différents navigateurs en fonction du statut de connexion
  render() {
    const {status, user} = this.props;
    if (status.connected === false) {
      // Waiting the connection with meteor
      return <Start/>;                          //Attente de connexion avec meteor
    } else if (user !== null) {
      // Connected with meteor and logged in
      return <LoggedIn/>;                     //Autentification OK, appel du navigateur gérant les ecrans disponible une fois connecté
    }
    // Connected with meteor but not logged in
    return <LoggedOut/>;                  //Connexion ok, autentification en cours. Navigateur gérant la connexion utilisateur
  }
}

// App.propTypes = {
//   status: React.PropTypes.instanceOf(Meteor.status()).isRequired,
//   user: React.PropTypes.instanceOf(Meteor.user()).isRequired
// };

export default createContainer(() => {          //Gestion connexion meteor
  return {
    status: Meteor.status(),
    user: Meteor.user(),
    loggingIn: Meteor.loggingIn()
  };
}, App);
