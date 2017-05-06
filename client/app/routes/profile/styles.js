import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    // justifyContent: 'space-between',
    backgroundColor: '#f9ebd8'
  },
  container1: {
    backgroundColor: '#ccc1b1',

  },
  chartContainer: {
    width: 300,
    height: 100,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9ebd8'
  },
  chart: {
    width: 300,
    height: 200
  },
  infoContainer: {
    flexDirection: 'column'
  },
  button: {
    backgroundColor: '#93282b',
    width: 100,
    padding: 10,
    alignItems: 'center',
    marginBottom: 10
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '500',
    fontSize: 16,
    flexDirection: 'column'
  },
  buttonWrapper: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  infoText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3c918c',
    textAlign: 'center'
  },
  imageBubble: {

  },
  infoWrap: {
    flexDirection: 'row',
    backgroundColor: '#ded2c1',
    justifyContent: 'space-between',
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,
    borderRadius: 10
  },
  pickerWrap: {
    borderWidth: 2,
    borderColor: '#3c918c',
    backgroundColor: '#f9ebd8',
    paddingHorizontal: 7,
    borderRadius: 10
  },
  descriptionContainer: {

  },
  descriptionButWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  buttonEdit: {
    height:50,
    width: 50,
    backgroundColor: '#a1aca8',
    borderRadius: 5
  }
});
