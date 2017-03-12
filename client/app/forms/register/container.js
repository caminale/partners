import React, {Component} from 'react';

import Form from './form';
import formValidationSync from './validations';

class Container extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: {}
    }
  }
  onSubmit(creds) {
    const {onSubmit} = this.props;
    const validation = formValidationSync(creds);

    if (validation.isValid) {
      this.setState({errors: {}});
      onSubmit(creds);
    } else {
      this.setState({errors: validation.errors});
    }
  }
  render() {
    const {errors} = this.state;
    return (
      <Form
        register={creds => this.onSubmit(creds)}
        errors={errors}
      />
    );
  }
}

export default Container;
