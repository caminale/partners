import React from 'react';
import {Image} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import ExNavigator from '@exponent/react-native-navigator';

import Routes from '../../configs/routes';
import images from '../../configs/images';
import styles from './styles';

class LoggedIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'Home',
    };
  }

  renderTabItem(title, initialRoute, Icon) {
    const { selectedTab } = this.state;
    const sceneStyle = [];
    if (initialRoute.showNavigationBar !== false) {
      sceneStyle.push({ paddingTop: 64 });
    }

    return (
      <TabNavigator.Item
        selected={selectedTab === title}
        title={title}
        renderIcon={() => <Image style={styles.icon} source={Icon} />}
        renderSelectedIcon={() => (
          <Image
            style={[styles.icon, styles.iconSelected]}
            source={Icon}
          />
        )}
        onPress={() => this.setState({ selectedTab: title })}
      >
        <ExNavigator
          initialRoute={initialRoute}
          style={{ flex: 1 }}
          sceneStyle={sceneStyle}
          showNavigationBar={initialRoute.showNavigationBar}
        />
      </TabNavigator.Item>
    );
  }

  render() {
    return (
      <TabNavigator>
        {this.renderTabItem('Home', Routes.getHomeRoute(), images.logo)}
        {this.renderTabItem('About', Routes.getAboutRoute(), images.logo)}
      </TabNavigator>
    );
  }
}

export default LoggedIn;
