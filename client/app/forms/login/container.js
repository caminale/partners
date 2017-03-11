import React, {Component} from 'react';

import Form from './form';


class Container extends Component {
  render() {
    const user = {
      error: null
    };
    const {onSubmit} = this.props;
    return (
      <Form
        onSubmit={onSubmit}
        user={user}
      />
    );
  }
}

export default Container;
