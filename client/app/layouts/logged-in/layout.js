import React from 'react';
import Swiper from 'react-native-swiper';
import ReactNative from 'react-native';

import Routes from '../../routes';
import styles from './styles';

const {
  View
} = ReactNative;
const {Matching, Profile, Message} = Routes;
const INDEX = {
  PROFILE: 0,
  MATCHING: 1,
  MESSAGE: 2
};

class LoggedIn extends React.Component {
  constructor() {
    super();
    this.state = {
      index: INDEX.MATCHING
    }
  }
  render() {
    const {index} = this.state;
    return (
      <View>
        <Swiper
          loop={false}
          showsPagination={false}
          index={index}>
          <Profile/>
          <Matching/>
          <Message/>
        </Swiper>
      </View>
    );
  }
}

export default LoggedIn;
