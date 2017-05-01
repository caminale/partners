import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    // justifyContent: 'space-between',
    backgroundColor: '#f9ebd8'
  },
  chartContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9ebd8'
  },
  chart: {
    width: 200,
    height: 100
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
    borderWidth: 10,
    borderRadius: 25
  },
  infoWrap: {
    flexDirection: 'row',
    backgroundColor: '#ded2c1'
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
    width: 200

  },
  buttonEdit: {
    height:50,
    width: 50
  }
});
