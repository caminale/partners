import React, {Component} from 'react';
import {View} from 'react-native';

import Scene from './scene';

class Container extends Component {
  selectConversation = conversation => {
    this.props.navigator.push({
      name: 'conversation',
      passProps: {
        conversation
      }
    });
  };
  render() {
    return (
      <View>
        <Scene selectConversation={this.selectConversation}/>
      </View>
    );
  }
}

Container.propTypes = {
  navigator: React.PropTypes.object.isRequired
};

export default Container;