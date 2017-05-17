import React, {Component} from 'react';
import Meteor, {createContainer} from 'react-native-meteor';
import ReactNative from 'react-native';
import styles from './styles';
import {Button} from '../../components';
import Chart from 'react-native-chart';
import StarRating from 'react-native-star-rating';


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
    const {accounts} = this.props;
    const user= accounts.findOne({_id: this.props.data.foreignUserId});
    let rate = Meteor.user.averageStarRating;
    if(rate === undefined)
    {
      rate =2.5;
    }
    else {
      rate=parseFloat(rate);
    }
    this.state = {
      exercise: 'BP',
      chartLabel: '',
      text: user.profile.description ,
      editableTI: false,
      data: [
        ["12/05", 65],
        ["10/06", 67],
        ["25/06", 71],
        ["15/07", 72],
      ],
      starCount: rate
    };

  }
  filterStats = (stats, filter) => {
    let result = [];
    stats.map(function(x) {
      if(x.userId === filter.userId && x.exerciseId === filter.exerciseId){
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
    console.log('yoooooooooooooooooooooooooolooooooooooooooooooooo');
    const {accounts,userStatsExo} = this.props;
    const partner = accounts.findOne({_id: this.props.data.foreignUserId});
    let filter = {userId: partner._id, exerciseId: p_exerciseId};
    if(partner !== undefined) {

      stats = this.filterStats(userStatsExo,filter);
      if(stats != undefined) {
        if (stats.length === 1) {
          console.log('test' + stats[0].weight + " length" + stats.length);
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
    const squats = 'Z2asvxEdRRBWbanM8'
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
  };
  updateLanguage = (exercise) => {
    this.setState({exercise: exercise});
    this.selectExercise(exercise);
  };
  addAction=()=> {
    this.props.navigator.pop();
    Meteor.call("sendAddPartner",this.props.data.foreignUserId);
  };
  removeUser = (p_userId) => {
    Meteor.call("removeUser",p_userId);
    this.props.navigator.pop();
  };

  render() {

    const {accounts} = this.props;

    const user= accounts.findOne({_id: this.props.data.foreignUserId});
    console.log( this.props.data.foreignUserId);
    const profilePic = user.profile.picture;
    const fName = user.profile.firstName;
    const age = user.profile.age;
    const height = user.profile.height;
    const weight = user.profile.weight;
    const {goBack} = this.props;

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
                  rating={this.state.starCount}
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
                  verticalGridStep={5}
                  tightBounds={true}
                  showDataPoint={true}
                  axisLineWidth={2}
                  lineWidth={4}
                  color={"0B69E4"}
                  type="line"/>
              </ScrollView>
            </View>
          </View>
            <View style={styles.containerButtonAddRemove}>
              <TouchableOpacity
                onPress={() =>this.addAction(user)}
                style={styles.buttonAdd}>

                <View style={styles.buttonAddWrap}>
                  <Image source={require('../../images/iconAddPartnerW.png')}
                         style={{width: 15, height: 15}}/>
                  <Text style={styles.buttonText}>Add</Text>
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
  export default createContainer(params => {

  const userId = Meteor.user()._id;

  Meteor.subscribe('users', userId);
  Meteor.subscribe('stats');

  return {
    userStatsExo : Meteor.collection('stats').find(),
    accounts: Meteor.collection('users') //si on veux utliser cette var
  };
}, Scene);//will reactively rerender the wrapped component
