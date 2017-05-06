import React, {Component} from 'react';

import Form from './form';

class Container extends Component {
  constructor(props) {
    super(props);
  }

  onSubmit = stats => {
    const {onSubmit} = this.props;
    onSubmit(stats);

  };

  render() {
    return (
      <Form onSubmit={this.onSubmit}/>
    );
  }
}

export default Container;
