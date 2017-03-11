import React, {Navigator} from 'react';
import ExNavigator from '@exponent/react-native-navigator';
import Routes from '../../configs/routes';

const LoggedOut = () => {
  const route = Routes.getLoginRoute();
  return (
    <ExNavigator
      initialRoute={route}
      style={{ flex: 1 }}
      showNavigationBar={route.showNavigationBar}
    />
  );
};

export default LoggedOut;