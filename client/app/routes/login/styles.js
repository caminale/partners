import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f9ebd8'
  },
  loginWrap: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  buttonWrap: {
    paddingHorizontal: 105,
    marginVertical: 10
  },
  titleText: {
    fontWeight: 'bold',
    fontFamily: 'sans-serif-condensed',
    marginVertical: 20,
    fontSize: 40,
    color: '#1285e5'
  },
  background: {
    width: null,
    height: null
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
});
