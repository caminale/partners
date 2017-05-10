import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Meteor, {createContainer} from 'react-native-meteor';
import Scene from './scene'

 let createContainerUser = createContainer(params => {

  const userId = Meteor.user()._id;

  Meteor.subscribe('users', userId);


  return {

    accounts: Meteor.collection('users') //pour export all accounts
  };
}, Scene);//will reactively rerender the wrapped component
export default createContainerUser;