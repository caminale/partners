import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  // I did for each component a wrap to manage their position
  input: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: 'white',
    flex: 1,
    paddingHorizontal:10,
  },
  errorStyle: {
    color: 'red'
  },
  errorWrap: {
    paddingHorizontal: 15,
    marginVertical: 2
  },
  testStyle: {
    borderColor:'red',
    borderWidth: 1
  },
  icon: {
    height:20,
    width:20
  },
  iconWrap: {
    paddingHorizontal:7,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'white'
  },
  inputWrap: {
    flexDirection: 'row',
    marginHorizontal:10
  }
});
