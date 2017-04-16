import React from 'react';
import {View, Image} from 'react-native';

import images from '../../images';
import styles from './styles';

const Component = () => {
  return (
    <View style={styles.container}>
      <Image source={images.logo}/>
    </View>
  );
};

export default Component;
