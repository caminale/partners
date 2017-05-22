import React, {Component} from 'react';
import Meteor, {createContainer} from 'react-native-meteor';
import ReactNative from 'react-native';
import styles from './styles';
import Chart from 'react-native-chart';
import StarRating from 'react-native-star-rating';


const {
  View,
  TextInput,
  Text,
  Picker,
  Image,
  ScrollView,
  TouchableOpacity
} = ReactNative;

class Scene extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: '',
      partnerId: '',
      exercise: 'BP',
      chartLabel: '',
      text: Meteor.user().profile.description,
      data: [
        ["12/05", 65],
        ["10/06", 67],
        ["25/06", 71],
        ["15/07", 72],
      ],
      starCount: 0,
    };

  }

  filterBoolCompleteRating = (rating, filter) => {
    let b_complete = false;
    rating.map(function (x) {
      if (x.userId = filter.userId) {
        b_complete = x.complete;
      }
    });
    return b_complete;

  };

  returnBoolCompleteRating = () => {

    const rating = this.props.foreignUser.rating;
    let filter = {userId: Meteor.user()._id};
    let b_complete = false;
    if (rating !== undefined) {
      b_complete = this.filterBoolCompleteRating(rating, filter);
    }
    return b_complete;
  };

  filterStats = (stats, filter) => {
    let result = [];
    stats.map(function (x) {
      if (x.userId === filter.userId && x.exerciseId === filter.exerciseId) {
        result.push(x);
      }
    });
    return result;
  };
  returnStats = (p_exerciseId) => {

    let stats = [];
    let weight = [];
    let nbrOfWeightEnter = 0;
    let date = [];
    const partner = this.props.foreignUser;
    let filter = {userId: partner._id, exerciseId: p_exerciseId};

    if (partner !== undefined) {

      stats = this.filterStats(this.props.stats, filter);
      if (stats != undefined) {
        if (stats.length === 1) {
          stats = stats[0];
          nbrOfWeightEnter = stats.weight.length;
          //pemit to take only the 4 last stats enter
          if (nbrOfWeightEnter > 4) {
            for (i = nbrOfWeightEnter - 4; i < nbrOfWeightEnter; i--) {
              weight[i] = stats.weight[i];
            }
          }
          else {
            weight = stats.weight
          }

          date = stats.date.map(function (x) {
            datee = new Date(x);
            let dd = datee.getDate();
            let mm = datee.getMonth() + 1;
            let yyyy = datee.getFullYear();
            if (dd < 10) {
              dd = '0' + dd
            }
            if (mm < 10) {
              mm = '0' + mm
            }
            // d = dd+'/'+mm+'/'+yyyy
            console.log(x = dd + '/' + mm);
            return x = dd + '/' + mm;
          });
        }
      }
      else {
        weight = 0;
        date = 0;
      }

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
      if (date.length > 1) {
        for (i = 0; i < date.length; i++) {
          data.push([date[i], weight[i]]);
        }
      }
      else {
        data = [
          [date[0], weight[0]]
        ];
      }
      this.setState({data: data});
      this.render();
    }
    else if (exercise === 'SQ') {
      weight = this.returnStats(squats).weight;
      date = this.returnStats(squats).date;
      if (date.length > 1) {
        for (i = 0; i < date.length; i++) {
          data.push([date[i], weight[i]]);
        }
      }
      else {
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
      if (date.length > 1) {
        for (i = 0; i < date.length; i++) {
          data.push([date[i], weight[i]]);
        }
      }
      else {
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
      if (date.length > 1) {
        for (i = 0; i < date.length; i++) {
          data.push([date[i], weight[i]]);
        }
      }
      else {
        data = [
          [date[0], weight[0]],
        ]
      }

      this.setState({data: data});
      this.render();

    }
  };
  updateLanguage = (exercise) => {
    this.setState({exercise: exercise});
    this.selectExercise(exercise);
  };

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }

  setText = comment => {
    this.setState({comment: comment});
    this.setState({partnerId: this.props.foreignUser._id});
  };
  onSubmit = () => {

    this.props.onSubmit(this.state);
  };

  render() {

    const user = this.props.foreignUser;
    const profilePic = user.profile.picture;
    const fName = user.profile.firstName;
    const age = user.profile.age;
    const height = user.profile.height;
    const weight = user.profile.weight;
    const description = user.profile.description;


    const {goBack} = this.props;

    if(this.returnBoolCompleteRating() === true) {
      return (
        <View style={styles.container}>
          <ScrollView>
            <View>
              <TouchableOpacity style={styles.button} onPress={goBack}>
                <View style={styles.backBut}>
                  <Image source={require('../../images/iconBackW.png')}
                         style={{width: 20, height: 20}}/>
                  <Text style={styles.buttonText}>go back</Text>
                </View>
              </TouchableOpacity>
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
              </View>
            </View>
            <View style={styles.descriptionContainer}>
              <View style={styles.descriptionButWrap}>
                <Text style={styles.infoTextStat}>
                  About {fName}
                </Text>
              </View>
              <Text style={styles.descriptionText}>
                {description}
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
                  <Picker.Item label="lat pull down" color='#0C74FB'
                               value="PD"/>
                  <Picker.Item label="dips" color='#0C74FB' value="D"/>
                </Picker>
              </View>
              <ScrollView>
                <View style={styles.chartContainer}>
                  <Chart
                    style={styles.chart}
                    data={this.state.data}
                    verticalGridStep={5}
                    tightBounds={true}
                    xAxisHeight={35}
                    yAxisWidth={35}
                    showDataPoint={true}
                    axisLineWidth={2}
                    lineWidth={4}
                    color={"0B69E4"}
                    type="line"/>
                </View>
              </ScrollView>
            </View>
          </ScrollView>
        </View>
      );
    }
    else {
      return(

        <View style={styles.container}>
          <ScrollView>
            <View>
              <TouchableOpacity style={styles.button} onPress={goBack}>
                <View style={styles.backBut}>
                  <Image source={require('../../images/iconBackW.png')}
                         style={{width: 20, height: 20}}/>
                  <Text style={styles.buttonText}>go back</Text>
                </View>
              </TouchableOpacity>
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
              </View>
            </View>
            <View style={styles.descriptionContainer}>
              <View style={styles.descriptionButWrap}>
                <Text style={styles.infoTextStat}>
                  About {fName}
                </Text>
              </View>
              <Text style={styles.descriptionText}>
                {description}
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
                  <Picker.Item label="lat pull down" color='#0C74FB'
                               value="PD"/>
                  <Picker.Item label="dips" color='#0C74FB' value="D"/>
                </Picker>
              </View>
              <ScrollView>
                <View style={styles.chartContainer}>
                  <Chart
                    style={styles.chart}
                    data={this.state.data}
                    verticalGridStep={5}
                    tightBounds={true}
                    xAxisHeight={35}
                    yAxisWidth={35}
                    showDataPoint={true}
                    axisLineWidth={2}
                    lineWidth={4}
                    color={"0B69E4"}
                    type="line"/>
                </View>
              </ScrollView>
            </View>
            <View style={styles.chartStatContainer}>
              <Text style={styles.infoText}>
                your opinion
              </Text>
              <StarRating
                disabled={false}
                emptyStar={'ios-star-outline'}
                fullStar={'ios-star'}
                halfStar={'ios-star-half'}
                iconSet={'Ionicons'}
                maxStars={5}
                rating={this.state.starCount}
                starColor={'#0B69E4'}
                starSize={30}
                selectedStar={(rating) => this.onStarRatingPress(rating)}
                emptyStarColor={'white'}/>
              <View style={styles.backBut}>
                <TextInput
                  multiline={true}
                  numberOfLines={3}
                  placeholder={"leave a comment about your partner"}
                  style={{height: 80, width: 250}}
                  editable={true}
                  placeholderTextColor="white"
                  onChangeText={this.setText}/>
                <TouchableOpacity style={styles.buttonValidate}
                                  onPress={this.onSubmit}>
                  <View style={styles.backBut}>
                    <Image source={require('../../images/iconValidateW.png')}
                           style={{width: 20, height: 20}}/>
                    <Text style={styles.buttonText}>Validate</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      );
    }
  }
}
export default Scene;



