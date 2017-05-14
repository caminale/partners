import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  // I did for each component a wrap to manage their position
  inputWrap: {
    marginVertical: 10,
    height: 45
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
    color: '#FFFFFF',
    fontWeight: '500',
    fontSize: 16,
    flexDirection: 'column'
  },
  errorStyle: {
    color: 'red'
  },
  input: {
    borderWidth: 2,
    borderColor: 'red'
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
  },
  buttonUpdate: {
    backgroundColor: '#0B69E4',
    width: 120,
    padding: 10,
    alignItems: 'center',
    marginBottom: 10,
    marginLeft: 60,
    borderWidth: 2,
    borderColor: "#1583ff"

  }

});
