import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    // JustifyContent: 'center',
    backgroundColor: '#f9ebd8'
  },
  loginWrap: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  buttonWrap: {
    paddingHorizontal: 105,
    marginVertical: 10
  },
  button: {
    backgroundColor: 'transparent',
    borderWidth: 3,
    marginTop: 15,
    padding: 5,
    borderColor: '#3c918c'
  },
  buttonText: {
    color: '#FFF',
    backgroundColor: 'transparent'
  },
  titleText: {
    fontWeight: 'bold',
    fontFamily: 'sans-serif-condensed',
    marginVertical: 20,
    fontSize: 40,
    color: '#3c918c'
  },
  background: {
    width: null,
    height: null
  }
});
