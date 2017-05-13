import {StyleSheet} from 'react-native';

export default StyleSheet.create({

  container: {
    backgroundColor: '#d0d8dc',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  containerMeteorListView: {
    marginTop: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 0.7,

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
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '500',
    fontSize: 16,
    flexDirection: 'column'
  },
  buttonBack: {
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
    backgroundColor: '#3c918c',
    alignItems: 'center',
    padding: 3 ,
    marginTop: 4,
  },
  textTitle: {
    color: '#64758b',
    fontWeight: '500',
    fontSize: 25,

  },
  textButton: {
    color: '#aaedf5',
    fontWeight: 'bold',
    fontSize: 16
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
  }
});
