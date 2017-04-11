import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    // justifyContent: 'center',
    backgroundColor: '#f9ebd8'
  },
  registerWrap: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  titleText: {
    fontWeight: 'bold',
    fontFamily: 'sans-serif-condensed',
    marginVertical: 20,
    fontSize: 40,
    color: '#3c918c',
  },
  buttonText: {
    color : '#FFF',
    backgroundColor:'transparent',
  },
  buttonWrap: {
    paddingHorizontal: 65,
    marginVertical: 10,
  },
  button: {
    backgroundColor:'transparent',
  }
});
