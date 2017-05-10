import {StyleSheet} from 'react-native';

export default StyleSheet.create({

  container: {
    backgroundColor: '#f9ebd8',
    justifyContent: 'space-between',
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
    color: '#3c918c',
    fontWeight: '100',
    fontSize: 25
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
