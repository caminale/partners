import React, {Component} from 'react';
import {Navigator} from 'react-native';
import ReactNative from 'react-native';

import {Login, Home, Register} from '../../routes';

const {
  BackAndroid
} = ReactNative;

class MyNavigator extends Component {               // NAVIGATEUR de gestion des vues avant connexion (LOGGED-OUT)
  constructor() {
    super();
    this.renderScene = this.renderScene.bind(this);
  }
  renderScene(route, navigator) {    // Appel des différentes routes en passant le navigateur (pour qu'elles ai accès au changement de vue)

    BackAndroid.addEventListener('hardwareBackPress', () => {
      if (navigator.getCurrentRoutes().length === 1  ) {
        return false;
      }
      navigator.pop();
      return true;
    });
    switch (route.name) {
      case 'home':
        return <Home navigator={navigator}/>;         // Appel de la route home (Boutons Login/Register)
      case 'login':
        return <Login navigator={navigator}/>;      // Appel de la route login (connexion email ou facebook)
      case 'register':
        return <Register navigator={navigator}/>;   // Appel de la route register (formulaire d'inscription)
      default:
        console.log(route.name);
    }
  }
  render() {
    return (
      <Navigator                                     // Appel du navigateur en passant 2 paramètres (route initiale et la connextion
        initialRoute={{name: 'home'}}             // A la fonction renderScene permettant de gérer les vues
        renderScene={this.renderScene}
        />
    );
  }
}

export default MyNavigator;
