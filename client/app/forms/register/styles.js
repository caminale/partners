import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  inputWrap: {
    paddingHorizontal: 15,
    marginVertical: 10,
    height:50,
    backgroundColor:'transparent'
  },
  errorStyle: {
    color: 'red',
  },
  button: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor:'white',
    alignItems: 'center',
    justifyContent: 'center',
    height : 35,
  },
  buttonWrap: {
    paddingHorizontal: 65,
    marginVertical: 20,
  },
  buttonText :{
    color : '#FFF',
    alignItems: 'center',
    justifyContent: 'center',

  },
  input: {
    flex:1,
    // backgroundColor:'#FFF',
    backgroundColor:'transparent',
    borderWidth: 2,
    borderColor:'white',

  },
  errorWrap:{
    paddingHorizontal: 15,
    marginVertical: 2,
    // height:20,
    // backgroundColor:'transparent'
  }

});

export default styles;
