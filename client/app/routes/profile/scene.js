import React, {Component} from 'react';
import ReactNative from 'react-native';
import Meteor from 'react-native-meteor';
import Chart from 'react-native-chart';
import OneSignal from 'react-native-onesignal';

import {Button} from '../../components';
import styles from './styles';

const {
  View,
  TouchableOpacity,
  Text,
  Picker,
  Image,
  TextInput,
  ScrollView
} = ReactNative;

class Scene extends Component {
  constructor(props) {
    super(props);

    this.state = {
      exercise: 'BP',
      chartLabel: '',
      text: Meteor.user().profile.description,
      editableTI: false,
      data: [
        ["12/05", 65],
        ["10/06", 67],
        ["25/06", 71],
        ["15/07", 72],
        ["05/08", 74],
        ["25/08", 76]
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


// Listening to postNotification using OneSignal.Configure:
  onNotificationOpened = (message, data, isActive) => {
    if (data.p2p_notification) {
      for (var num in data.p2p_notification) {
        console.log(data.p2p_notification[num]);
      }
    }
  };

  sendNotif = () => {
    let data = [0, 1];
    let playerId = '3eaa3208-7876-40a9-9a6b-cdf3a4bf391d';
    let contents = {
      'en': 'You got a new partners request'
    };
    let large_icon = require('../../images/logo.png');
    let template_id = '53cac07f-eb5d-43c5-982e-3331f440e816';
    let headings = {'en': 'Partners'};


    OneSignal.postNotification(contents, headings, playerId);
  };

  selectExercise = exercise => {
    if (exercise === 'BP') {
      let data = [
        ["12/05", 65],
        ["10/06", 67],
        ["25/06", 71],
        ["15/07", 72],
        ["05/08", 74],
        ["25/08", 76]
      ];
      this.setState({data: data});
      this.render();
    }
    else if (exercise === 'SQ') {
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
                style={styles.profilePic}/>
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
              <Image source={require('../../images/iconParameterW.png')}
                     style={{width: 30, height: 30}}/>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.descriptionContainer}>
          <View style={styles.descriptionButWrap}>
            <Text style={styles.infoTextStat}>
              About yourself
            </Text>
          </View>
          <TextInput
            multiline={true}
            numberOfLines={4}
            placeholder={this.state.text }
            style={{height: 100, width: 300}}
            editable={this.state.editableTI}
            placeholderTextColor="white"
            onChangeText={this.setText}/>
        </View>
        <View style={styles.chartStatContainer}>
          <Text style={styles.infoText}>
            Stats
          </Text>
          <View style={styles.pickerWrap}>
            <Picker
              selectedValue={this.state.exercise}
              onValueChange={this.updateLanguage}>
              <Picker.Item label="bench press" color='#0C74FB' value="BP"/>
              <Picker.Item label="squats" color='#0C74FB' value="SQ"/>
            </Picker>
          </View>
          <View style={styles.chartContainer}>
            <ScrollView>
              <Chart
                style={styles.chart}
                data={this.state.data}
                verticalGridStep={7}
                tightBounds={true}
                axisLineWidth={2}
                lineWidth={4}
                color={"0B69E4"}
                type="line"/>
            </ScrollView>
          </View>
        </View>
        <View >
          <TouchableOpacity
            style={styles.buttonAddStats}
            onPress={addStats}>
            <Text style={{
              fontSize: 20,
              textAlign: 'center',
              color: 'white',
              fontWeight: 'bold'
            }}>
              + Add Stats
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Scene;
