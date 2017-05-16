import React, {Component} from 'react';
import Meteor from 'react-native-meteor';
import Scene from './scene'

class Container extends Component {
  constructor(props) {
    super(props);
  }
  goBack = () => { //for get props on navigator
    this.props.navigator.pop();
  };
  ratePartner = data => {

    const rating = {
      userId: data.partnerId,
      mark: data.starCount,
      opinion: data.comment,
    };
    Meteor.call("addRating",rating);
    this.props.navigator.pop();

  };
  render() {
    return (
      <Scene goBack={this.goBack}
             onSubmit={this.ratePartner}
             foreignUser={this.props.data.foreignUser}
             stats={this.props.stats}
      />
    );
  }
}

export default Container;
