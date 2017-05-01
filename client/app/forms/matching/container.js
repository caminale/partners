import React, {Component} from 'react';

import Form from './form';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {}
    };
  }
  onSubmit = stats => {
    const {onSubmit} = this.props;
    onSubmit(stats)
  };
  render() {
    return (
      <Form
        onSubmit={this.onSubmit}
        errors={this.state.errors}/>
    );
  }
}

Form.propTypes = {
  onSubmit: React.PropTypes.func.isRequired
};
export default Container;
