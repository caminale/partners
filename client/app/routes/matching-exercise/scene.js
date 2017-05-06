import React, {Component} from 'react';
import ReactNative from 'react-native';
import {ExerciseForm} from '../../forms';

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
        <ExerciseForm onSubmit={onSubmit}/>
      </View>
    );
  }

};


// Scene.propTypes = {
//   onSubmit: React.PropTypes.func.isRequired
// };
export default Scene;
