import React, {Component} from 'react';
import ReactNative from 'react-native';
import Meteor from 'react-native-meteor';
import Chart from 'react-native-chart';

import {Button} from '../../components';
import styles from './styles';

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
      ]
    };


    // if(Meteor.user().profile.description === null)
    // {
    //   this.setState({text: "describe yourself"}) ;
    // }
    // else
    // {
    //   this.setState({text: Meteor.user().profile.description}) ;
    // }
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
  onSubmitDescription = () => {
    this.props.onSubmitDescription(this.state);
  };
  updateLanguage = (exercise) => {
    this.setState({exercise: exercise});
    this.selectExercise(exercise);
  };
  setText = text => {
    this.setState({text});

  };
  editText = () => {
    if (this.state.text === null) {
      this.setState({editableTI: true});
    }
    else {
      this.setState({editableTI: false});
      this.onSubmitDescription();
    }
  };
  openSettings = () => {
    this.props.openSettings(this.state);
  };


  render() {
    const profilePic = Meteor.user().profile.picture;
    const fName = Meteor.user().profile.firstName;
    const age = Meteor.user().profile.age;
    const height = Meteor.user().profile.height;
    const weight = Meteor.user().profile.weight;
    const {addStats} = this.props;

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
          <TouchableOpacity style={styles.buttonEdit}
                            onPress={this.openSettings}>
            <Image source={require('../../images/iconParameter.png')}
                   style={{width: 50, height: 50}}/>
          </TouchableOpacity>
        </View>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.infoText}>
            About yourself
          </Text>
          <View style={styles.descriptionButWrap}>
            <TextInput
              multiline={true}
              numberOfLines={4}
              placeholder={this.state.text }
              style={{height: 100, width: 300}}
              editable={this.state.editableTI}
              onChangeText={this.setText}/>
            <TouchableOpacity style={styles.buttonEdit} onPress={this.editText}>
              <Image
                source={require('../../images/iconEdit.png')}
                style={{width: 50, height: 50}}/>
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
            type="line"/>
        </View>
        <Button onPress={addStats}
                label={'add Stats'}/>
      </View>
    );
  }
}

export default Scene;
