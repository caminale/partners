import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#f9ebd8',
    marginTop: 20,
    flexDirection:'column'
  },
  buttonBack: {
    borderWidth: 3,
    marginHorizontal: 100,
    alignItems: 'center',
    borderColor: '#3c918c'
  },
  userMessageWrap: {
    flexDirection: 'column',
    backgroundColor: '#1285e5',
    marginLeft: 150,
    justifyContent: 'center',
    marginTop: 10,
    alignItems: 'center',
    borderRadius: 20
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
  postTitle: {
    fontWeight: 'bold',
    fontSize: 25
  },

  button: {
  },
  containerBackground: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  textZone:
    {

    },
  inputBut:
    {
      flexDirection: 'column',
     // justifyContent: 'flex-start'
    }
});
