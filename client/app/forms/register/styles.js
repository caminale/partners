import React, {Component} from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create ({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    height:40,
    alignItems: 'center'
  },
  text: {
    paddingVertical: 15,
    color: '#3c918c',
    justifyContent: 'center',
    fontSize: 15,
    justifyContent:'center'
  },
  button: {
    borderWidth: 3,
    padding: 1,
    height:50,
    margin:30,
    borderColor: '#3c918c',
  },
  input1: {
    backgroundColor:'#c1b2a3'

  },
  input2: {
    backgroundColor:'#c1b2a3'
  },
  error: {
    color: 'red'
  }
});

export default styles;
