import React from 'react';
import {View, Image} from 'react-native';

import styles from './styles';

const Component = () => {
  return (
    <View style={styles.container}>
      <View style={styles.muscleContainer}>
      <Image source={require('../../images/iconMuscleW.png')}
             style={{width: 100, height: 100}}/>
      </View>
    </View>
  );
};

export default Component;
