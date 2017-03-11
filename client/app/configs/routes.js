import React from 'react';

import About from '../routes/about';
import Home from '../routes/home';
import Login from '../routes/login';
import Register from '../routes/register';

export const routes = {
  getAboutRoute() {
    return {
      renderScene(navigator) {
        return <About navigator={navigator} />;
      },

      getTitle() {
        return 'About';
      },
    };
  },
  getHomeRoute() {
    return {
      renderScene(navigator) {
        return <Home navigator={navigator} />;
      },

      getTitle() {
        return 'Home';
      },
    };
  },
  getLoginRoute() {
    return {
      renderScene(navigator) {
        return <Login navigator={navigator} />;
      },

      showNavigationBar: false
    };
  },
  getRegisterRoute() {
    return {
      renderScene(navigator) {
        return <Register navigator={navigator} />;
      },

      showNavigationBar: false
    };
  }
};

export default routes;
