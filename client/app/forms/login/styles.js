import {StyleSheet} from 'react-native';

export default StyleSheet.create ({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    height:250,
    alignItems: 'center'
  },
  text: {
    paddingVertical: 15,
    color: '#3c918c',
    justifyContent: 'center',
    fontSize: 15
  },
  button: {
    borderWidth: 3,
    padding: 5,
    borderColor: '#3c918c'
  },
  input: {
    height: 40,
    width:180,
    borderColor: 'gray',
    borderWidth: 3
  },
  withShadow: {
    backgroundColor: '#f9ebd8',
    borderRadius: 3,
    shadowColor: "#473ea4",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 4,
      width: -4
    }
  },
  error: {
    color: 'red'
  }
});
