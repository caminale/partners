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
  },
  background: {
    width: null,
    height: null
  },
  muscleContainer: {
    backgroundColor: '#0B69E4',
    borderRadius: 45,
    borderWidth: 7,
    borderColor: '#1583ff',

  }
});
