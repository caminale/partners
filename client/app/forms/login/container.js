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
      onSubmit(creds)
        .catch(err=> {
          const errors = {submit: err.reason};
          this.setState({errors});
        });
    } else {
      this.setState({errors: validation.errors});
    }
  }
  onLoginFacebook(error, result) {
    const {onLoginFacebook} = this.props;
    if (error) {
      console.log('login error', error);
    } else if (result.isCancelled) {
      console.log('login cancelled');
    } else {
      onLoginFacebook();
    }
  }
  render() {
    const {errors} = this.state;
    return (
      <Form
        onSubmit={creds => this.onSubmit(creds)}
        onLoginFacebook={this.onLoginFacebook}
        errors={errors}
      />
    );
  }
}

export default Container;
