import React, {Component} from 'react';
import ReactNative from 'react-native';
import Meteor from 'react-native-meteor';
import Chart from 'react-native-chart';
import ImagePicker from 'react-native-image-crop-picker';

import OneSignal from 'react-native-onesignal';
import StarRating from 'react-native-star-rating';

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
      ],
      options : {
        title: 'Select Avatar',
        maxWidth:50,
        maxHeight: 50,
        quality: 0,
        storageOptions: {
          skipBackup: true,
          path: 'images'
        }
      },
      imagePicked: 'content://media/external/images/media/933'
    };

  }



  openCam = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      compressImageQuality: 0.8,
      includeBase64: true,
      compressImageMaxHeight: 140,
      compressImageMaxWidth: 140,
      cropping: true
    }).then(image => {
      setTimeout(function(){console.log('data:image/png;base64,' + image.data); }, 20000);

    });
      //this.setState({imagePicked: source});

    let playerId = '418c8ee5-4fdb-4792-bbd9-0feb84ee8f0e';
    let contents = {
      'en': 'You got a new partners request'
    };
    let headings = {'en': 'Partners'};


    //OneSignal.postNotification(contents, headings, playerId);
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
              <TouchableOpacity
              onPress={this.openCam}>
              <Image
                source={{uri: 'data:image/png;base64,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'}}
                style={styles.profilePic}/>
              </TouchableOpacity>
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
              <StarRating
                disabled={true}
                emptyStar={'ios-star-outline'}
                fullStar={'ios-star'}
                halfStar={'ios-star-half'}
                iconSet={'Ionicons'}
                maxStars={5}
                rating={4}
                starColor={'#0B69E4'}
                emptyStarColor={'white'}
              />
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
            onPress={this.sendNotif}>
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
