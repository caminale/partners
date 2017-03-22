import React from 'react';
import {View} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

import styles from './styles';

const Component = () => {
  return (
    <View style={styles.container}>
      <Spinner visible={true}
               textContent={"Loading..."}
               textStyle={{color: '#FFF'}} />
    </View>
  );
};

export default Component;
