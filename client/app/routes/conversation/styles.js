import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {

    backgroundColor: '#FFFFFF',
     justifyContent: 'space-between',
    flex: 1
  },

  userMessageWrap: {
    backgroundColor: '#1285e5',
    marginLeft: 150,
    marginTop: 10,
    alignItems: 'center',
    borderRadius: 20,
    justifyContent: 'space-between'

  },
  foreignMessageWrap: {
    flexDirection: 'column',
    backgroundColor: '#e6e4dd',
    justifyContent: 'center',
    marginRight: 150,
    marginTop: 10,
    alignItems: 'center',  
    borderRadius: 20
  },
  ourTextStyle: {
    color: 'white',
    textAlign: 'right'

  },
  TextStyle: {
    color: 'black',
    textAlign: 'left'

  },
  authorStyle: {
    color: 'green'
  },
  header: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25
  },
  backButton: {
    flexDirection: 'row',
    justifyContent: 'flex-start'

  },
  textInputButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#d0d8dc'

  },
  headerWrap: {
    backgroundColor: '#d0d8dc'

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
  photo: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  partnerBut: {
    flexDirection: 'row',
    justifyContent: 'center'
  }



});
