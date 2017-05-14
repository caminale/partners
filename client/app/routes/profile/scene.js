import React, {Component} from 'react';
import ReactNative from 'react-native';
import Meteor from 'react-native-meteor';
import Chart from 'react-native-chart';
import ImagePicker from 'react-native-image-crop-picker';

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

    let rate = Meteor.user().averageStarRating;
    if(rate === undefined)
    {
      rate =2.5;
    }
    else {
      rate=parseFloat(rate);
    }
    this.state = {
      exercise: 'BP',
      starCount: rate,
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
      compressImageMaxHeight: 130,
      compressImageMaxWidth: 130,
      cropping: true
    }).then(image => {
      setTimeout(function(){Meteor.call('addProfilePicture','data:image/png;base64,' + image.data); }, 20000);

    });

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
                source={{uri: profilePic}}
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
                rating={this.state.starCount}
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
