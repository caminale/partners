import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor:'#f9ebd8'
  },
  text: {
    paddingVertical: 15,
    color: '#3c918c',
    justifyContent: 'center',
    fontSize: 15
  },
  button: {
    borderWidth: 3,
    padding: 8,
    borderColor: '#3c918c'
  },
  input: {
    backgroundColor:'#c1b2a3',

  },
  error: {
    color: 'red'
  }
});
