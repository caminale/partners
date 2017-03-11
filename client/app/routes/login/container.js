import React, {Component} from 'react';

import Scene from './scene';

class Container extends Component {
  loginHandler = creds => {
    console.log(creds);
  };
  render() {
    return (
      <Scene onSubmit={this.loginHandler}/>
    );
  }
}

export default Container;
