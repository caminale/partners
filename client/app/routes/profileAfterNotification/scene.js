import React, {Component} from 'react';
import Meteor, {createContainer} from 'react-native-meteor';
import ReactNative from 'react-native';
import styles from './styles';
import {Button} from '../../components';
import Chart from 'react-native-chart';

const {
  View,
  TouchableOpacity,
  Text,
  Picker,
  Image,
  TextInput
} = ReactNative;

class Scene extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exercise: 'BP',
      chartLabel: '',
      text: Meteor.user().profile.description ,
      editableTI: false,
      data: [
        ["12/05", 65],
        ["10/06", 67],
        ["25/06", 71],
        ["15/07", 72],
      ],
      starCount: 3.5,
    };

  }
  selectExercise = exercise => {
    if (exercise === 'BP') {
      let data = [
        ["12/05", 65],
        ["10/06", 67],
        ["25/06", 71],
        ["15/07", 72],
      ];
      this.setState({data: data});
      this.render();
    }
    else if(exercise === 'SQ') {
      let data = [
        ["10/04", 85],
        ["12/05", 89],
        ["15/06", 98],
        ["25/07", 92],
      ];
      this.setState({data: data});
      this.render();

    }
  };
  updateLanguage = (exercise) => {
    this.setState({exercise: exercise});
    this.selectExercise(exercise);
  };
  acceptAction=()=> {
    Meteor.call("answerAddPartner",this.props.foreignUser._id);
    this.props.goBack();
  };

  refuseAction=()=> {
    this.props.goBack();
  };

  render() {

    const user= this.props.foreignUser;
    const profilePic = user.profile.picture;
    const fName = user.profile.firstName;
    const age = user.profile.age;
    const height = user.profile.height;
    const weight = user.profile.weight;

    return (
      <View style={styles.container}>
        <View>
          <View style={styles.infoWrap}>
            <View style={styles.imageBubble}>
              <Image
                source={{uri: profilePic}}
                style={{width: 90, height: 90, borderRadius: 25}}/>
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
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.infoText}>
            About yourself
          </Text>
          <View style={styles.descriptionButWrap}>
            <Text>{user.profile.description}</Text>
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
            type="line"/>
        </View>
        <View style={styles.buttonAddRemoveWrap}>
          <TouchableOpacity
            onPress={this.acceptAction}
            style={styles.buttonAdd}>
            <Text>accept</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.refuseAction}
            style={styles.buttonRemove}>
            <Text>refuse</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default Scene;