import React from 'react';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import Routes from '../../routes';
import TabBar from '../../components/tab-bar';

const {Matching, Profile, Message} = Routes;

class LoggedIn extends React.Component {
  render() {
    return (
      <ScrollableTabView tabBarPosition="bottom"
                         initialPage={1}
                         renderTabBar={() => <TabBar />}>
        <Profile tabLabel="ios-paper"/>
        <Matching tabLabel="ios-people"/>
        <Message tabLabel="ios-chatboxes"/>
      </ScrollableTabView>
    );
  }
}

export default LoggedIn;
