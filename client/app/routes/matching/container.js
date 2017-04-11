import React, {Component} from 'react';

import Scene from './scene';
import MatchingFormDeb from '../../forms/matching/formDebutant';
import MatchingFormInt from '../../forms/matching/formIntermediaire';
import MatchingFormExp from '../../forms/matching/formExpert';


class Container extends Component {

  constructor(props) {
    super(props);

    this.state = {value1: 10};

  }

  selectHandler = creds => {
    const {value} = creds;
    this.setState({value1: value});
  };

  setLevel = creds => {

    console.log('level set');
  };

  render() {

    if (this.state.value1 === 10) {
      return (
        <Scene
          onSelect={this.selectHandler}/>
      );
    }
    else if (this.state.value1 === 0) {
      return (
        <MatchingFormDeb onSubmit={this.setLevel} />

      );
    }
    else if (this.state.value1 === 1) {
      return (
        <MatchingFormInt onSubmit={this.setLevel} />

      );
    }
    else if (this.state.value1 === 2) {
      return (
        <MatchingFormExp onSubmit={this.setLevel} />

      );
    }

  }
}

export default Container;
