import {StyleSheet} from 'react-native';

export default StyleSheet.create({

  container: {
    backgroundColor: '#d0d8dc',
    justifyContent: 'space-between',
    flex: 1,
  },
  containerMeteorListView: {
    marginTop: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 2,
    borderColor: '#788ca6',
    backgroundColor: '#64758b'
  },
  containerPhotoText: {
    padding: 12,
    flexDirection: 'row',
  },
  wrapNameAge: {
    justifyContent: 'space-between',
    flexDirection: 'column',
    padding: 3
  },
  containerButtonAddRemove: {
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  photo: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
  },
  button: {
    borderColor: '#d8d8d8',
    backgroundColor: '#b0b0b0',
    borderWidth: 2,
    width: 130,
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    marginBottom: 10,
    justifyContent: 'flex-end'

  },
  textTitle: {
    color: '#3c918c',
    fontWeight: '100',
    fontSize: 25
  },
  textButton: {
    color: '#aaedf5',
    fontWeight: 'bold',
    fontSize: 16
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '500',
    fontSize: 16,
    flexDirection: 'column'
  },
  userWrap: {
    flexDirection: 'column',
    backgroundColor: '#1285e5',
    justifyContent: 'center',
    marginTop: 10,
    alignItems: 'center',
    borderRadius: 20
  },
  notificationWrap: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  notificationButton: {
    borderRadius: 200,
    backgroundColor: '#1285e5'
  },
  buttonRemove: {
    backgroundColor: '#ac0000',
    width: 120,
    padding: 10,
    height: 40,
    marginBottom: 5,
    borderWidth: 2,
    borderColor: "#d80000"

  },
  buttonAddWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between'


  },
  buttonAdd: {
    backgroundColor: '#0B69E4',
    width: 120,
    padding: 10,
    height: 40,
    marginTop: 5,
    marginBottom: 5,
    borderWidth: 2,
    borderColor: "#1583ff"
  },
  wrapTextNotif: {
    borderWidth: 1,
    height: 20,
    width: 20,
    borderColor: "#d80000",
    borderRadius: 20,
    backgroundColor: "#d80000"
  },
  textNotif: {
    color: '#FFFFFF',

  },
});
