import React, {Component} from 'react';
import {Navigator} from 'react-native';

import {
  Profile,
  SettingsProfile,
  AddStats,
  SettingsProfilePicker
} from '../../routes';

class MyNavigator extends Component {
  constructor() {
    super();
    this.renderScene = this.renderScene.bind(this);
  }


  renderScene(route, navigator) {
    switch (route.name) {
      case 'main':
        return <Profile navigator={navigator}/>;
      case 'settings':
        return <SettingsProfile navigator={navigator}/>;
      case 'addstats':
        return <AddStats navigator={navigator}/>;
      case 'settingspicker':
        return <SettingsProfilePicker navigator={navigator}/>;
      default:
        console.log(route.name);
    }
  }

  render() {

    return (
      <Navigator                                     // Appel du navigateur en passant 2 paramètres (route initiale et la connextion
        initialRoute={{name: 'main'}}             // A la fonction renderScene permettant de gérer les vues
        renderScene={this.renderScene}
      />
    );

  }
}
export default MyNavigator;
