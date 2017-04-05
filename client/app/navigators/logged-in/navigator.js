import React from 'react';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import {Matching, Profile} from '../../routes';
import {ConversationNavigator} from '../../navigators';

import {TabBar} from '../../components';

class MyNavigator extends React.Component {                 //NAVIGATEUR de gestion des vues après connexion (LOGGED-IN)
  renderTabBar = () => {
    return <TabBar/>;                       //Appel du composant TabBar gérant l'accès aux différentes vues
  };
  render() {
    return (
      <ScrollableTabView                       //Bar gérant l'accès au différentes vues, passage de différentds paramètres et de l'accès
        tabBarPosition="bottom"               //a la fonction renderTabBar
        initialPage={1}
        renderTabBar={this.renderTabBar}
        >
        <Profile tabLabel="ios-paper"/>         //Icones et passages des routes vers Profile, Matching et le navigateur CONVERSASIONS
        <Matching tabLabel="ios-people"/>       //qui seront appelée par tabBar via ScrollableTabView
        <ConversationNavigator tabLabel="ios-chatboxes"/>
      </ScrollableTabView>
    );
  }
}

export default MyNavigator;
