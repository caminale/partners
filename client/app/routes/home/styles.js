import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
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
    left: 0,
    backgroundColor: 'transparent'

  },
  loginButton: {
    padding: 20,
    backgroundColor: '#64758b'
  },
  registerButton: {
    padding: 20,
    backgroundColor: '#d0d8dc'
  },
  title: {
    alignSelf: 'stretch',
    textAlign: 'center',
    color: '#0B69E4',
    backgroundColor: '#d0d8dc',
    fontSize: 50,
    fontWeight: 'bold'
  },
  text1: {
    alignSelf: 'stretch',
    textAlign: 'center',
    color: '#d0d8dc',
    fontSize: 30
  },
  text2: {
    alignSelf: 'stretch',
    textAlign: 'center',
    color: '#64758b',
    fontSize: 30
  },
  background: {
    width: null,
    height: null
  },
  muscleContainer: {
    backgroundColor: '#0B69E4',
    borderRadius: 45,
    borderWidth: 7,
    marginTop: 70,
    borderColor: '#1583ff',
    alignSelf: 'center'
  }
});
