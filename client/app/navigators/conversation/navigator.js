import React, {Component} from 'react';
import {Navigator} from 'react-native';

import {Conversation, Conversations} from '../../routes';

class MyNavigator extends Component {             //NAVIGATEUR DE GESTION DES CONVERSATIONS
  constructor() {
    super();
    this.renderScene = this.renderScene.bind(this);
  }
  renderScene(route, navigator) {
    switch (route.name) {
      case 'conversation':
        return <Conversation navigator={navigator}/>;       //Appel de la vue d'une conversation
      case 'conversations':
        return <Conversations navigator={navigator}/>;      //Appel de la vue du nombre de conversations
      default:
        console.log(route.name);
    }
  }
  render() {
    return (
      <Navigator                           //Appel du navigateur avec passage de paramètres (fonction renderScene definie plus haut)
        initialRoute={{name: 'conversations'}}
        renderScene={this.renderScene}
        />
    );
  }
}

export default MyNavigator;
