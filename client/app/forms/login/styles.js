import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  // I did for each component a wrap to manage their position
  inputWrap: {
    paddingHorizontal: 15,
    marginVertical: 10,
    height: 50
  },
  buttonWrap: {
    paddingHorizontal: 65,
    marginVertical: 20
  },
  errorWrap: {
    paddingHorizontal: 15,
    marginVertical: 5
  },
  buttonText: {
    color: '#FFF',
    alignItems: 'center',
    justifyContent: 'center'

  },
  errorStyle: {
    color: 'red'
  },
  input: {
    flex: 1,
    // BackgroundColor:'#FFF',
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: 'white'

  },
  forgotButton: {
    // BackgroundColor: 'green',
    backgroundColor: 'transparent',
    // BorderWidth: 0.5,
    // https://facebook.github.io/react-native/docs/flexbox.html for to see alignItem,flexdirection,justify...
    alignItems: 'center',
    justifyContent: 'center',
    height: 35
  },
  loginButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    height: 35
  }
});
