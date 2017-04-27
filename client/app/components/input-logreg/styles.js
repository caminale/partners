import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  // I did for each component a wrap to manage their position
  input: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#3c918c',
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
    height:30,
    width:30
  },
  labelWrap: {
    flexDirection: 'column',

  },
  label: {
    textAlign: 'center',
    color: '#3c918c',
    fontSize: 15,
    fontWeight: 'bold'


  },
  iconWrap: {
    paddingHorizontal:7,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#3c918c',
    borderRadius: 10
  },
  inputWrap: {
    flexDirection: 'row',
    marginHorizontal:10
  }
});
