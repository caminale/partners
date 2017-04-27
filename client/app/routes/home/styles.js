import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9ebd8'
  },
  image: {
    margin: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerButtons: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0
  },
  loginButton: {
    padding: 20,
    backgroundColor: '#3c918c'
  },
  registerButton: {
    padding: 20,
    backgroundColor: '#997b67'
  },
  title: {
    alignSelf: 'stretch',
    textAlign: 'center',
    color: '#3c918c',
    fontSize: 50,
    fontWeight: 'bold'
  },
  text: {
    alignSelf: 'stretch',
    textAlign: 'center',
    color: '#f9ebd8',
    fontSize: 30
  }
});
