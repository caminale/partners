import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  inputWrap: {
    paddingHorizontal: 15,
    marginVertical: 10,
    height: 60,
    backgroundColor: 'transparent'
  },
  errorStyle: {
    color: 'red'
  },
  button: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    height: 35
  },
  buttonWrap: {
    paddingHorizontal: 65,
    marginVertical: 20
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '500',
    fontSize: 16,
    flexDirection: 'column'
  },
  input: {
    flex: 1,
    // BackgroundColor:'#FFF',
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: 'white'

  },
  errorWrap: {
    paddingHorizontal: 15,
    marginVertical: 2
    // Height:20,
    // backgroundColor:'transparent'
  },
  buttonUpdate: {
    backgroundColor: '#0B69E4',
    width: 120,
    padding: 10,
    alignItems: 'center',
    marginBottom: 10,
    marginLeft: 60,
    borderWidth: 2,
    borderColor: "#1583ff"

  }

});

export default styles;
