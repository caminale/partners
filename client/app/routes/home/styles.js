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
    borderWidth: 2,
    padding: 20,
    borderColor: '#3c918c',
    backgroundColor: 'green'
  },
  registerButton: {
    borderWidth: 2,
    padding: 20,
    borderColor: '#3c918c',
    backgroundColor: 'orange'
  },
  text: {
    alignSelf: 'stretch',
    textAlign: 'center',
    color:'#3c918c',
    fontSize: 30
  }
});
