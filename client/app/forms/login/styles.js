import React, {Component} from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create ({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    paddingVertical: 15,
    color: 'black',
    justifyContent: 'center',
    fontSize: 15
  },
  button: {
    borderWidth: 1,
    padding: 10,
    borderColor: 'black'
  },
  input: {
    height: 40,
    width:180,
    borderColor: 'gray',
    borderWidth: 3
  },
  error: {
    color: 'red'
  }
});

export default styles;
