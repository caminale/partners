import React, {Component} from 'react';
import {Navigator} from 'react-native';
import Meteor from 'react-native-meteor';


import {
  MatchingExercise,
  MatchingPersonal,
  MatchingWorkout
} from '../../routes';

class MyNavigator extends Component {               // NAVIGATEUR de gestion des vues avant connexion (LOGGED-OUT)
  constructor() {
    super();
    this.renderScene = this.renderScene.bind(this);
  }


  renderScene(route, navigator) {    // Appel des différentes routes en passant le navigateur (pour qu'elles ai accès au changement de vue)
    switch (route.name) {
      case 'exercise':
        return <MatchingExercise navigator={navigator}/>;         // Appel de la route home (Boutons Login/Register)
      case 'personal':
        return <MatchingPersonal navigator={navigator}/>;      // Appel de la route login (connexion email ou facebook)
      case 'workout':
        return <MatchingWorkout navigator={navigator}/>;
      default:
        console.log(route.name);
    }
  }

  render() {

    const com = Meteor.user().profile.completeProfile;
    if (com === true) {
      return (
        <Navigator                                     // Appel du navigateur en passant 2 paramètres (route initiale et la connextion
          initialRoute={{name: 'workout'}}             // A la fonction renderScene permettant de gérer les vues
          renderScene={this.renderScene}
        />
      );
    }
    else
    {
      return (
        <Navigator                                     // Appel du navigateur en passant 2 paramètres (route initiale et la connextion
          initialRoute={{name: 'exercise'}}             // A la fonction renderScene permettant de gérer les vues
          renderScene={this.renderScene}
        />
      );
    }

  }
}
export default MyNavigator;
