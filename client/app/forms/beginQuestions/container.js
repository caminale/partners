import React, {Component} from 'react';
import Meteor from 'react-native-meteor';
import Form from '../beginQuestions/container';

class Container extends Component {
  constructor(props) {
    super(props);
  }

  onSubmitPull(statsPull) {


  }
  onSubmitPush(statsPush) {
    console.log('yolo');
    Meteor.call('addPushup', statsPush);

  }

  render() {
    return (
      <Form
        onSubmitPull={statsPull => this.onSubmitPull(statsPull)}
        onSubmitPush={statsPush => this.onSubmitPush(statsPush)}
        />
    );
  }
}
export default Container;
