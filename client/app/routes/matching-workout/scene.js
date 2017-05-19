import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Meteor, {createContainer} from 'react-native-meteor';
import {MeteorListView} from 'react-native-meteor';
import StarRating from 'react-native-star-rating';
import OneSignal from 'react-native-onesignal';

import styles from './styles';

class Scene extends Component {
  constructor(props) {


    super(props);

    this.state = {
      foreignUserId:''
    };

  }
  componentDidMount() {
    OneSignal.configure({});
  }

  componentWillMount() {

    OneSignal.addEventListener('ids', this.onIds);
  }

  componentWillUnmount() {
    OneSignal.removeEventListener('ids', this.onIds);
  }

  onIds(device) {
    setTimeout(function () {

        if (device !== undefined && Meteor.user()._id !== null) {
          const userId = Meteor.user()._id;
          const Id = {
            userId: userId,
            deviceId: device
          };
          Meteor.call("addId", Id);
        }
      }
      , 600);
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
    let rate = user.averageStarRating;
    if(rate === undefined)
    {
      rate =0;
    }
    else {
      rate=parseFloat(rate);
    }
    return (
      <View style={styles.containerMeteorListView}>
        <View style={styles.containerPhotoText}>
          <Image
            source={{uri: user.profile.picture}}
            style={styles.photo}/>
          <View style={styles.wrapNameAge}>
            <Text style={styles.buttonText}>
              {`${user.profile.firstName}, ${user.profile.age}`}
            </Text>

          </View>
        </View>
        <StarRating
          disabled={true}
          emptyStar={'ios-star-outline'}
          fullStar={'ios-star'}
          halfStar={'ios-star-half'}
          iconSet={'Ionicons'}
          maxStars={5}
          rating={rate}
          starColor={'#3696e4'}
          starSize={20}
        />
        <View style={styles.containerButtonAddRemove}>
          <TouchableOpacity
            onPress={() =>this.openProfile(user._id)}
            style={styles.buttonAdd}>

            <View style={styles.buttonAddWrap}>
              <Image source={require('../../images/iconAddPartnerW.png')}
                     style={{width: 15, height: 15}}/>
              <Text style={styles.buttonText}>Profile</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonRemove}
            onPress={() => this.removeUser(user._id)}>
            <View style={styles.buttonAddWrap}>

              <Image source={require('../../images/iconTrashW.png')}
                     style={{width: 15, height: 15}}/>
              <Text style={styles.buttonText}>remove</Text>
            </View>
          </TouchableOpacity>

        </View>
      </View>
    );
  };

  render() {

    const userId = Meteor.user()._id;
    const partners= Meteor.user();
    let numberNotif = Meteor.user().notifications;
    if(numberNotif === undefined )
    {numberNotif=0;}
    Meteor.subscribe('users', userId);
//|| Meteor.user().removeUser !== undefined
    if (Meteor.user().partners !== undefined || Meteor.user().removeUser !== undefined) {
      // test user is ready permit to charge the db
      console.log('prout');
      return (
        <View style={styles.container}>
          <Text style={styles.textTitle}>Partners</Text>
          <View style={styles.notificationWrap}>
            <View style={styles.wrapTextNotif}>
            <Text style={styles.textNotif}> {numberNotif}</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={this.openNotification}>
            <Image source={require('../../images/iconNotifW.png')}
                   style={{width: 30, height: 30}}/>
            <Text style={styles.buttonText}>notification</Text>
          </TouchableOpacity>
        </View>

          <MeteorListView
            enableEmptySections
            collection="users"
            options={{limit: 5}}
            selector={{$and: [{_id: {$ne: userId}}, {_id: {$nin: Meteor.user().partners }},{_id: {$nin: Meteor.user().removeUser}},{level: {$lte: Meteor.user().level+1, $gte: Meteor.user().level-1}}
            ]}}
            renderRow={this.renderRow}/>

        </View>
      );
    }
    else {
      return (
        <View style={styles.container}>
          <Text style={styles.textTitle}>Partners</Text>
          <View style={styles.notificationWrap}>
            <View style={styles.wrapTextNotif}>
              <Text style={styles.textNotif}> {numberNotif}</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={this.openNotification}>
              <Image source={require('../../images/iconNotifW.png')}
                     style={{width: 30, height: 30}}/>
              <Text style={styles.buttonText}>notification</Text>
            </TouchableOpacity>
          </View>
          <MeteorListView
            enableEmptySections
            collection="users"
            options={{limit: 5}}
            selector={{$and: [{_id: {$ne: userId}},{level: {$lte: Meteor.user().level+1, $gte: Meteor.user().level-1}}]}}
            renderRow={this.renderRow}/>
        </View>

      );
    }

  }

}
export default Scene;
//I think the issue is that you're actually calling this.showCallInfo instead of passing it as your onPress function for your new button for onpress
//$nin: [ 5, 15 ]
//{ $and: [ { _id: { $ne: userId } }, { _id: { $ne: '' }
