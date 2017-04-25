import React, {Component} from 'react';
import Scene from './scene';


class Container extends Component {

  constructor(props) {
    super(props);
  }
  nextForm = () => {

  };

  render() {

    return (

      <Scene onSubmit={this.nextForm}/>
    );
  }

}
export default Container;
