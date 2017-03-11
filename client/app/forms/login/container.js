import React, {Component} from 'react';
import {connect} from 'react-redux';

import Form from './form';

@connect(store => {
  return {
    user: store.user
  };
})
class Container extends Component {
  render() {
    const {onSubmit, user} = this.props;
    return (
      <Form
        onSubmit={onSubmit}
        user={user}
      />
    );
  }
}

export default Container;
