import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Meteor, {createContainer} from 'react-native-meteor';
import {MeteorListView} from 'react-native-meteor';
import StarRating from 'react-native-star-rating';


import styles from './styles';
import {Button} from '../../components';

class Scene extends Component {
  constructor(props) {
    super(props);

    this.state = {
      starCount: 3.5,
      foreignUserId: ''
    };

  }


  openProfile = (p_foreignUserId) => {
    this.props.openProfile(p_foreignUserId);
  };

  openNotification = () => {
    this.props.openNotification();
  };

  removeUser = (p_userId) => {
    Meteor.call("removeUser",p_userId);
  };
  renderRow = user => {

    return (
      <View style={styles.containerMeteorListView}>
        <View style={styles.containerPhotoText}>
          <Image
            source={{uri: user.profile.picture}}
            style={styles.photo}/>
          <View style={styles.wrapNameAge}>
            <Text style={styles.text}>
              {`${user.profile.firstName} ${user.profile.lastName}`}

            </Text>
            <Text style={styles.text}>
              {`${user.profile.age} `} ans
            </Text>
          </View>
        </View>
        <StarRating
          disabled={false}
          emptyStar={'ios-star-outline'}
          fullStar={'ios-star'}
          halfStar={'ios-star-half'}
          iconSet={'Ionicons'}
          maxStars={3}
          rating={this.state.starCount}
          selectedStar={(rating) => this.onStarRatingPress(rating)}
          starColor={'red'}
        />
        <View style={styles.containerButtonAddRemove}>
          <TouchableOpacity
            onPress={() => this.openProfile(user._id)}
            style={styles.button}>
            <Text>View Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.removeUser(user._id)}
            style={styles.button}>
            <Text>remove</Text>
          </TouchableOpacity>

        </View>
      </View>
    );
  }

  render() {

    const userId = Meteor.user()._id;
    Meteor.subscribe('users', userId);

    if (Meteor.user().partners !== undefined || Meteor.user().removeUser !== undefined) {
      // test user is ready permit to charge the db
      return (
        <View style={styles.container}>
          <Button onPress={this.openNotification}
                  label={'notif'}/>

          <MeteorListView
            enableEmptySections
            collection="users"
            selector={ {$and: [{_id: {$ne: userId}}, {_id: {$nin: Meteor.user().partners}}]}}
            renderRow={this.renderRow}/>

          <Button onPress={this.openProfile}
                  label={'Search partners'}/>
        </View>
      );
    }
    else {
      return (
        <View style={styles.container}>
          <Button onPress={this.openNotification}
                  label={'notif'}/>
          <Button onPress={this.openProfile}
                  label={'Search partners'}/>
        </View>

      );
    }

  }

}
export default Scene;
//I think the issue is that you're actually calling this.showCallInfo instead of passing it as your onPress function for your new button for onpress
//$nin: [ 5, 15 ]
//{ $and: [ { _id: { $ne: userId } }, { _id: { $ne: '' }