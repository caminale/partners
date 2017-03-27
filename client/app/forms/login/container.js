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
    const validation = formValidationSync(creds);

    if (validation.isValid) {
      this.setState({errors: {}});
      onSubmit(creds)
        .catch(err => {
          const errors = {submit: err.reason};
          this.setState({errors});
        });
    } else {
      this.setState({errors: validation.errors});
    }
  };
  onForgot = creds => {
    const {onForgot} = this.props;
      onForgot(creds)
  };
  render() {
    const {errors} = this.state;
    return (
      <Form
        onSubmit={this.onSubmit}
        onForgot={this.onForgot}
        onSubmitFacebook={this.props.onSubmitFacebook}
        errors={errors}
        />
    );
  }
}

Container.propTypes = {
  onSubmit: React.PropTypes.func.isRequired,
  onSubmitFacebook: React.PropTypes.func.isRequired,
  onForgot: React.PropTypes.func.isRequired
};

export default Container;
