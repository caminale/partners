import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#d0d8dc'
  },
  text: {
    color: '#64758b',
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
  },
  buttonAddStats: {
    marginHorizontal: 100,
    backgroundColor: "#0B69E4",
    borderWidth: 2,
    borderColor: "#1583ff",
    marginBottom: 20
  }
});
