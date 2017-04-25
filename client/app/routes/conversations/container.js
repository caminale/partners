import React, {Component} from 'react';
import {View, } from 'react-native';

import Scene from './scene';

class Container extends Component {
  selectConversation = conversation => {
    this.props.navigator.push({
      name: 'conversation',
      conversation
    });
  };

  render() {
    return (
      <View>
        <Scene
          selectConversation={this.selectConversation}   //Appel de la scene avec passage de l'accès à la fonction selectConversation
        />
      </View>
    );
  }
}

Container.propTypes = {     //??
  navigator: React.PropTypes.object.isRequired
};

export default Container;
