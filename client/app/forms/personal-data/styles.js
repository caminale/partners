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
  textq: {
    color: '#64758b',
    fontSize: 15,
    fontWeight: 'bold'
  },
  button: {
    borderWidth: 3,
    padding: 8,
    borderColor: '#3c918c'
  },
  error: {
    color: 'red'
  },
  radiobuttoncontainer: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  pickerWrap: {
    borderWidth: 2,
    borderColor: '#3c918c',
    paddingHorizontal: 7,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },
  buttonAddStats: {
    marginHorizontal: 100,
    backgroundColor: "#0B69E4",
    borderWidth: 2,
    borderColor: "#1583ff",
    marginBottom: 20
  }
});
