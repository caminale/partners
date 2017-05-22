import React, {Component} from 'react';
import {Navigator} from 'react-native';
import ReactNative from 'react-native';

import {Conversation, Conversations, ProfileRatingPosts} from '../../routes';

const {
  BackAndroid
} = ReactNative;

class MyNavigator extends Component {             // NAVIGATEUR DE GESTION DES CONVERSATIONS
  constructor(props) {
    super(props);
    this.renderScene = this.renderScene.bind(this);
  }
  renderScene(route, navigator) {
    BackAndroid.addEventListener('hardwareBackPress', () => {
      if (navigator.getCurrentRoutes().length === 1  ) {
        return false;
      }
      navigator.pop();
      return true;
    });
    switch (route.name) {
      case 'conversation':
        return <Conversation navigator={navigator} data={route.passProps} />;       // Appel de la vue d'une conversation
      case 'conversations':
        return <Conversations navigator={navigator} data={this.props.accounts}/>;      // Appel de la vue du nombre de conversations
      case 'profile':
        console.log(route.passProps);
        return <ProfileRatingPosts navigator={navigator} accounts={this.props.accounts} data={route.passProps} stats={this.props.stats}/>
      default:
        console.log(route.name);
    }
  }
  render() {
    return (
      <Navigator                           // Appel du navigateur avec passage de paramètres (fonction renderScene definie plus haut)
        initialRoute={{name: 'conversations'}}
        renderScene={this.renderScene}
        />
    );
  }
}
export default MyNavigator;
