import React, {Component} from 'react';
import {View, } from 'react-native';

import Scene from './scene';

class Container extends Component {
  selectConversation = p_chatAndUser => {
  this.props.navigator.push({
    name: 'conversation',
    passProps: {
      conversation: p_chatAndUser.conversationId,
      foreignUser: p_chatAndUser.foreignUser
    }
  });
};

  render() {
    return (
        <Scene
          selectConversation={this.selectConversation}   //Appel de la scene avec passage de l'accès à la fonction selectConversation
          accounts={this.props.data}
        />
    );
  }
}

Container.propTypes = {     //??
  navigator: React.PropTypes.object.isRequired
};

export default Container;
