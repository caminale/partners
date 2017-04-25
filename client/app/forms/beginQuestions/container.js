import React, {Component} from 'react';

import Form from './form';
import formValidationSync from './validations';

class Container extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: {}
    };
  }

  onSubmit = creds => {
    const {onSubmit} = this.props;

    onSubmit(creds);

  }

  render() {
    const {errors} = this.state;
    return (
      <Form
        onSubmit={this.onSubmit}
        errors={errors}/>
    );
  }
}

Form.propTypes = {
  onSubmit: React.PropTypes.func.isRequired
};

export default Container;
