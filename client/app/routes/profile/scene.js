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
  ScrollView
} = ReactNative;

class Scene extends Component {
  constructor(props) {
    super(props);

    let rate = Meteor.user().averageStarRating;
    if(rate === undefined)
    {
      rate =0;
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


  };

  filterStats = (stats, filter) => {
    let result = [];
    stats.map(function(x) {
      if(x.userId === filter.userId && x.exerciseId === filter.exerciseId){
        result.push(x);
        console.log(x);
      }
    });
    return result;
  };
  returnStats = (p_exerciseId) => {
    let stats = [];
    let weight = [];
    let nbrOfWeightEnter = 0;
    let date = [];
    const partner =Meteor.user();
    let filter = {userId: partner._id, exerciseId: p_exerciseId};

    if(partner !== undefined) {
console.log('yolo'+this.props.stats);
      stats = this.filterStats(this.props.stats,filter);
      if(stats != undefined) {
        if (stats.length === 1) {
          // console.log('test' + stats[0].weight + " length" + stats.length);
          stats = stats[0];
          nbrOfWeightEnter =stats.weight.length;
          //pemit to take only the 4 last stats enter
          if(nbrOfWeightEnter > 4){
            for(i=nbrOfWeightEnter-4; i<nbrOfWeightEnter; i --){
              weight[i] = stats.weight[i];
            }
          }
          else {
            weight = stats.weight
          }

          date = stats.date.map(function(x) {
            datee = new Date(x);
            let dd = datee.getDate();
            let mm = datee.getMonth()+1;
            let yyyy = datee.getFullYear();
            if(dd<10){dd='0'+dd}
            if(mm<10){mm='0'+mm}
            // d = dd+'/'+mm+'/'+yyyy
            console.log(x = dd+'/'+mm);
            return x = dd+'/'+mm;
          });
        }
      }
      else {weight = 0; date = 0;}

      const statsObject = {
        weight: weight,
        date: date
      };
      return statsObject;
    }

  };


  selectExercise = exercise => {
    const bp = 'n5iCkhmR5ADkZPbNs';
    const squats = 'Z2asvxEdRRBWbanM8';
    const pulldown = 'CrzMaxQ4qKLWZHKLa';
    const dips = '4AMqjmCqkhADgjmrS';

    let data = [];
    let weight = [];
    let date = [];
    if (exercise === 'BP') {
      weight = this.returnStats(bp).weight;
      date = this.returnStats(bp).date;
      //pour le mettre sous forme artshape
      if(date.length>1) {
        for (i = 0; i < date.length; i++) {
          data.push([date[i], weight[i]]);
        }
        console.log(data);
      }

      else{
        data = [
          [date[0], weight[0]]
        ];}
      this.setState({data: data});
      this.render();
    }
    else if (exercise === 'SQ') {
      weight = this.returnStats(squats).weight;
      date = this.returnStats(squats).date;
      if(date.length>1) {
        for (i = 0; i < date.length; i++) {
          data.push([date[i], weight[i]]);
        }
      }
      else{
        data = [
          [date[0], weight[0]],
        ]
      }

      this.setState({data: data});
      this.render();

    }
    else if (exercise === 'PD') {
      weight = this.returnStats(pulldown).weight;
      date = this.returnStats(pulldown).date;
      if(date.length>1) {
        for (i = 0; i < date.length; i++) {
          data.push([date[i], weight[i]]);
        }
      }
      else{
        data = [
          [date[0], weight[0]],
        ]
      }

      this.setState({data: data});
      this.render();

    }
    else if (exercise === 'D') {
      weight = this.returnStats(dips).weight;
      date = this.returnStats(dips).date;
      if(date.length>1) {
        for (i = 0; i < date.length; i++) {
          data.push([date[i], weight[i]]);
        }
      }
      else{
        data = [
          [date[0], weight[0]],
        ]
      }

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
                starSize={25}
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

          <Text style={{color: 'white'}}>
            {this.state.text}
          </Text>
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
              <Picker.Item label="lat pull down" color='#0C74FB' value="PD"/>
              <Picker.Item label="dips" color='#0C74FB' value="D"/>
            </Picker>
          </View>
          <View style={styles.chartContainer}>
            <ScrollView>
              <Chart
                style={styles.chart}
                data={this.state.data}
                verticalGridStep={7}
                tightBounds={true}
                showDataPoint={true}
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
