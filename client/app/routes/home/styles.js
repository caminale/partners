import {StyleSheet} from 'react-native';

export default StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor:'#f9ebd8'
  },
  image: {
    margin: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerButtons : {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0
  },
  loginButton: {
    padding: 20,
    backgroundColor: 'green'
  },
  registerButton: {
    padding: 20,
    backgroundColor: 'orange'
  },
  title: {
    alignSelf: 'stretch',
    textAlign: 'center',
    color: 'blue',
    fontSize: 30
  },
  text: {
    alignSelf: 'stretch',
    textAlign: 'center',
    color:'white',
    fontSize: 30
  }
});
