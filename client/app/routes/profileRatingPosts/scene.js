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
      editableTI: true,
      data: [
        ["12/05", 65],
        ["10/06", 67],
        ["25/06", 71],
        ["15/07", 72],
      ],
      starCount: 2.5,
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

    return (
      <View style={styles.container}>
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
              About your Partner
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
            emptyStarColor={'white'}
          />
          <View style={styles.backBut}>
          <TextInput
            multiline={true}
            numberOfLines={3}
            placeholder={"leave a comment about your partner"}
            style={{height: 80, width: 250}}
            editable={this.state.editableTI}
            placeholderTextColor="white"
            onChangeText={this.setText}/>
          <TouchableOpacity style={styles.buttonValidate} onPress={this.onSubmit}>
            <View style={styles.backBut}>
              <Image source={require('../../images/iconValidateW.png')}
                     style={{width: 20, height: 20}}/>
              <Text style={styles.buttonText}>Validate</Text>
            </View>
          </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
export default Scene;