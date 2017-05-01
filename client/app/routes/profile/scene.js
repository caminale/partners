import React, {Component} from 'react';
import ReactNative from 'react-native';
import Meteor from 'react-native-meteor';
import Chart from 'react-native-chart';

import styles from './styles';

const {
  View,
  TouchableOpacity,
  Text,
  Picker,
  Image,
  TextInput
} = ReactNative;

const editIcon = require('../../images/iconEdit.png');

class Scene extends Component {
  constructor(props) {
    super(props);

    this.state = {
      exercise: '',
      chartLabel: '',
      text: 'Useless Multiline Placeholder',
      data: [
        [0, 65],
        [1, 67],
        [2, 71],
        [3, 72],
      ]
    };
  }

  selectExercise = () => {
    if (this.state === 'BP')
    {
      const data = [
        [0, 65],
        [1, 67],
        [2, 71],
        [3, 72],
      ];
      this.setState({data: data})
    }
    else
    {
      const data = [
        [0, 85],
        [1, 89],
        [2, 98],
        [3, 102],
      ];
      this.setState({data: data})

    }
  };
  updateLanguage = (exercise) => {
    this.setState({exercise: exercise});
    this.selectExercise();
  };

  render() {
    const {logout} = this.props;
    const profilePic = Meteor.user().profile.picture;
    const fName = Meteor.user().profile.firstName;
    const age = Meteor.user().profile.age;
    const height = Meteor.user().profile.height;
    const weight = Meteor.user().profile.weight;




    return (

      <View style={styles.container}>
        <View style={styles.infoWrap}>
          <View style={styles.imageBubble}>
            <Image
              source={{uri: profilePic}}
              style={{width: 90, height: 90}}/>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>
              {fName}, {age}
            </Text>
            <Text style={styles.infoText}>
              height : {height} Cm
            </Text>
            <Text style={styles.infoText}>
              weight : {weight} Kgs
            </Text>
          </View>
        </View>
        <View style={styles.descriptionContainer}>
        <Text style={styles.infoText}>
          About yourself
        </Text>

          <View style={styles.descriptionButWrap}>
            <Text>
              {this.state.text}
            </Text>
            <TouchableOpacity style={styles.buttonEdit}>
              <Image
                source={require('../../images/iconEdit.png')}
                style={{width: 50, height: 50}}
                />
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.infoText}>
          Stats
        </Text>
        <View style={styles.pickerWrap}>
          <Picker
            selectedValue={this.state.exercise}
            onValueChange={this.updateLanguage}>
            <Picker.Item label="bench press" color='#3c918c' value="BP"/>
            <Picker.Item label="squats" color='#3c918c' value="SQ"/>
          </Picker>
        </View>
        <View style={styles.chartContainer}>
          <Chart
            style={styles.chart}
            data={this.state.data}
            verticalGridStep={7}
            tightBounds={true}
            axisLineWidth={2}
            lineWidth={4}
            type="line"
          />
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.button} onPress={logout}>
            <Text style={styles.buttonText}>Sign Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

Scene.propTypes = {
  logout: React.PropTypes.func.isRequired
};

export default Scene;
