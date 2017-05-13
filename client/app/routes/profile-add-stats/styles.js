import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#d0d8dc',
    flex: 1,
    justifyContent: 'space-between'
  },

  infoContainer: {
    flexDirection: 'column',
    backgroundColor: '#64758b',
    marginHorizontal: 5,
    borderWidth: 3,
    borderColor: '#788ca6',
    justifyContent: 'space-between',
    marginBottom: 150

  },
  button: {
    borderColor: '#d8d8d8',
    backgroundColor: '#b0b0b0',
    borderWidth: 2,
    width: 120,
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    marginBottom: 10,
    justifyContent: 'space-between'

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
    color: '#FFFFFF',
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
    borderColor: '#FFFFFF',
    backgroundColor: '#64758b',
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
  },
  buttonLogout: {
    backgroundColor: '#ac0000',
    width: 120,
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    marginBottom: 10,
    justifyContent: 'space-between'
  },
  buttonUpdate: {
    backgroundColor: '#0B69E4',
    width: 120,
    padding: 10,
    alignItems: 'center',
    marginBottom: 10,
    marginLeft: 110,
    borderWidth: 2,
    borderColor: "#1583ff"
  }
});
