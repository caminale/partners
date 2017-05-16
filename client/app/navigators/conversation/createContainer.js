import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Meteor, {createContainer} from 'react-native-meteor';
import MyNavigator from './navigator'

export default createContainer(params => {

  const userId = Meteor.user()._id;

  Meteor.subscribe('users', userId);
  Meteor.subscribe('stats');

  return {
      stats : Meteor.collection('stats').find(),
      accounts: Meteor.collection('users').find()
  };
}, MyNavigator);
