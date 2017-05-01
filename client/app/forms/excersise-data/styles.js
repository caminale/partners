import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#f9ebd8'
  },
  text: {
    color: '#3c918c',
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  button: {
    borderWidth: 3,
    padding: 8,
    borderColor: '#3c918c'
  },
  input: {
    backgroundColor: '#c1b2a3'

  },
  error: {
    color: 'red'
  }
});
