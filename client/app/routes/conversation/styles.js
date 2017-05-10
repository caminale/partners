import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {

    backgroundColor: '#f9ebd8',
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
    backgroundColor: '#d7cbbb'

  },
  headerWrap: {
    backgroundColor: '#d7cbbb'

  }



});
