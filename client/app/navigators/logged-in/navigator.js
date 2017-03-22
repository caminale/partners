import React from 'react';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import {Matching, Profile} from '../../routes';
import {ConversationNavigator} from '../../navigators';

import {TabBar} from '../../components';

class MyNavigator extends React.Component {
  render() {
    return (
      <ScrollableTabView tabBarPosition="bottom"
                         initialPage={1}
                         renderTabBar={() => <TabBar />}>
        <Profile tabLabel="ios-paper"/>
        <Matching tabLabel="ios-people"/>
        <ConversationNavigator tabLabel="ios-chatboxes"/>
      </ScrollableTabView>
    );
  }
}

export default MyNavigator;
