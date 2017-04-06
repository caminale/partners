import React, {Component} from 'react';
import ReactNative from 'react-native';

import {MatchingForm} from '../../forms';

const {View,
  Text
} = ReactNative;

class Scene extends Component {
  render() {
    const {onSelect} = this.props;
    return (
      <View>
        <MatchingForm
        onSelect={onSelect}/>
      </View>
    );
  }
}

export default Scene;
