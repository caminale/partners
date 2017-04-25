import React, {Component} from 'react';
import ReactNative from 'react-native';
import {BegMatchingForm} from '../../forms';

import styles from './styles';

const {View} = ReactNative;

class Scene extends React.Component{

  constructor(props) {
    super(props);
  }

  render () {
    const {onSubmit} = this.props;
    return (
      <View style={styles.container}>
        <BegMatchingForm onSubmit={onSubmit}/>
      </View>
    );
  }

};


// Scene.propTypes = {
//   onSubmit: React.PropTypes.func.isRequired
// };
export default Scene;
