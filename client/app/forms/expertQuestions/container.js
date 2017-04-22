import React, {Component} from 'react';

import Form from '../expertQuestions/container';

class Container extends Component {
  constructor(props) {
    super(props);
  }

  onSelect(creds) {
    const {onSubmit} = this.props;
    console.log(this.props.valueOf());
  }

  render() {
    return (
      <Form
        onSelect={creds => this.onSelect(creds)}/>
    );
  }
}
export default Container;
