import {StyleSheet} from 'react-native';

export default StyleSheet.create({

  container: {
    backgroundColor: '#d0d8dc',
    justifyContent: 'space-between',
    flex: 1
  },
  containerMeteorListView: {
    marginTop: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 0.7,

  },
  containerPhotoText: {
    padding: 8,
    flexDirection: 'row',
  },
  wrapNameAge: {
    justifyContent: 'space-between',
    flexDirection: 'column',
    padding: 3
  },
  photo: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  text: {
    marginLeft: 12,
    fontSize: 22,
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
  input: {
    height: 50,
    flex: 1,
    paddingHorizontal: 8,
    fontSize: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 2,
  },
  containerHeader: {
    flex: 1,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#C1C1C1',
  },



});

