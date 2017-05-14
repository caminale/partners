import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#d0d8dc',
    justifyContent: 'space-between'
  },
  container1: {
    backgroundColor: '#ccc1b1',

  },
  profilePic: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 3,
    borderColor: '#8399b5'

  },
  chartContainer: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#64758b',
    borderWidth: 3,
    borderColor: '#8197b3'
  },
  chartStatContainer: {
    marginTop: 5,
    marginHorizontal: 5,
    backgroundColor: '#64758b',
    borderWidth: 3,
    borderColor: '#788ca6'
  },
  chart: {
    width: 350,
    backgroundColor: '#FFFFFF'


  },
  infoContainer: {
    flexDirection: 'column'
  },
  button: {
    borderColor: '#d8d8d8',
    backgroundColor: '#b0b0b0',
    borderWidth: 2,
    width: 100,
    flexDirection: 'row',
    padding: 10,
    height: 40,
    alignItems: 'center',
    marginBottom: 10,
    justifyContent: 'space-between'

  },
  buttonValidate: {
    borderColor: '#d8d8d8',
    backgroundColor: '#b0b0b0',
    borderWidth: 2,
    width: 100,
    marginTop: 30,
    flexDirection: 'row',
    padding: 10,
    height: 40,
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
  infoTextStat: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginLeft: 110
  },
  descriptionText: {
    color: 'white'

  },
  infoWrap: {
    flexDirection: 'row',
    backgroundColor: '#64758b',
    justifyContent: 'space-between',
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,
    borderWidth: 3,
    borderColor: '#788ca6'
  },
  pickerWrap: {
    borderWidth: 2,
    borderColor: '#FFFFFF',
    backgroundColor: '#64758b',
    paddingHorizontal: 7
  },
  descriptionContainer: {
    backgroundColor: '#64758b',
    marginHorizontal: 5,
    borderWidth: 3,
    borderColor: '#788ca6'

  },
  descriptionButWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  buttonEdit: {
    height:35,
    width: 35,
    backgroundColor: '#64758b',
    borderWidth: 2,
    borderColor: '#FFFFFF'

  },
  buttonAddStats: {
    marginHorizontal: 100,
    backgroundColor: "#0B69E4",
    borderWidth: 2,
    borderColor: "#1583ff",
    marginBottom: 20
  },
  backBut: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
