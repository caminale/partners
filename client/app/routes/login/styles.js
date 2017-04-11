import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    // justifyContent: 'center',
    backgroundColor: '#f9ebd8'
  },
  loginWrap: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  buttonWrap: {
    paddingHorizontal: 65,
    marginVertical: 10,
  },
  button: {
    backgroundColor:'transparent',
  },
  buttonText: {
    color : '#FFF',
    backgroundColor:'transparent',
  },
  titleText: {
    fontWeight: 'bold',
    fontFamily: 'sans-serif-condensed',
    marginVertical: 20,
    fontSize: 40,
    color: '#3c918c',
  },
  background :{
    width:null,
    height:null,
  }
});
