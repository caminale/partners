import React, {Component} from 'react';
import Meteor, {createContainer} from 'react-native-meteor';
import ReactNative from 'react-native';
import styles from './styles';
import Chart from 'react-native-chart';
import StarRating from 'react-native-star-rating';
import OneSignal from 'react-native-onesignal';



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
    let rate = this.props.foreignUser.averageStarRating;
    if(rate === undefined)
    {
      rate =0;
    }
    else {
      rate=parseFloat(rate);
    }
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
      starCount: rate,
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
  acceptAction = () => {
    Meteor.call("answerAddPartner",this.props.foreignUser._id);
    let playerId = this.props.foreignUser.oneSignalId.userId;
    let data = '';
    let contents = {
      'en': Meteor.user().profile.firstName + ' accepted your request'
    };
    OneSignal.postNotification(contents, data, playerId);
    this.props.goBack();
  };

  removeUser = (p_userId) => {
    Meteor.call("removeUser",p_userId);
    this.props.goBack();
  };
  render() {

    const user= this.props.foreignUser;
    console.log(user);
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
            numberOfLines={3}
            placeholder={this.state.text }
            style={{height: 70, width: 300}}
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
        <View style={styles.containerButtonAddRemove}>
          <TouchableOpacity
            onPress={this.acceptAction}
            style={styles.buttonAdd}>

            <View style={styles.buttonAddWrap}>
              <Image source={require('../../images/iconAddPartnerW.png')}
                     style={{width: 15, height: 15}}/>
              <Text style={styles.buttonText}>Accept</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonRemove}
            onPress={() => this.removeUser(user._id)}>
            <View style={styles.buttonAddWrap}>

              <Image source={require('../../images/iconTrashW.png')}
                     style={{width: 15, height: 15}}/>
              <Text style={styles.buttonText}>Remove</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default Scene;
