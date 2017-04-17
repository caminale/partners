import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    // Flex: 1,
    backgroundColor: 'white',
    marginTop: 20
  },
  buttonBack: {
    borderWidth: 3,
    marginTop: 15,
    marginHorizontal: 100,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#3c918c'
  },
  userMessageWrap: {
    flexDirection:'column',
    textAlign:'right'
    // alignItems: 'stretch',
    // padding: 10,
  },
  foreignMessageWrap: {
    flexDirection:'column'
    // // flex: 1,
    // alignItems: 'stretch',
    // padding: 10,
  },
  ourTextStyle: {
    color: 'blue',
    textAlign: 'right'

  },
  TextStyle: {
    color: 'black'
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
  row: {
    padding: 10,
    backgroundColor: '#F6F6F6'
  },
  button: {
    backgroundColor: 'green',
    borderWidth: 2
  },
  containerBackground: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  }
});
