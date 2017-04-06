import React, {Component} from 'react';

import Scene from './scene';

class Container extends Component {
  render() {
    return (
      <Scene
        onSelect={this.selectHandler}/>
    );
  }
}

export default Container;
