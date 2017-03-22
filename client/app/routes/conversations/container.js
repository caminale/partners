import React, {Component} from 'react';
import {View} from 'react-native';

import Scene from './scene';

export default class AboutContainer extends Component {
  selectConversation(conversation) {
    this.props.navigator.push({
      name: 'conversation',
      passProps: {
        conversation: conversation
      }
    });
  }
  render() {
    return (
      <View>
        <Scene selectConversation={this.selectConversation.bind(this)}/>
      </View>
    )
  }
}
