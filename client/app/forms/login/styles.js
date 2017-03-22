import {StyleSheet} from 'react-native';

export default StyleSheet.create ({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    height:250,
    alignItems: 'center',
    flex:1
  },
  container1: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    height:50,
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
    padding: 8,
    borderColor: '#3c918c'
  },
  input: {
    height: 40,
    width:180,
    borderColor: 'gray',
    borderWidth: 3
  },
  input1: {
    backgroundColor:'#c1b2a3',
    height:40
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
