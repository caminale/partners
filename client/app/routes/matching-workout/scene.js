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
      starCount: 2.5,
      foreignUserId:''
    };

  }

  openProfile = (p_foreignUserId) => {
    this.props.openProfile(p_foreignUserId);
  };

  openNotification = () =>{
    this.props.openNotification();
  };
  renderRow = user => {

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
          maxStars={3}
          rating={this.state.starCount}
          starColor={'#3696e4'}
          starSize={25}
        />
        <View style={styles.containerButtonAddRemove}>
          <TouchableOpacity
            onPress={() =>this.openProfile(user._id)}
            style={styles.buttonAdd}>
            <View style={styles.buttonAddWrap}>

            <Image source={require('../../images/iconAddPartnerW.png')}
                   style={{width: 15, height: 15}}/>
            <Text style={styles.buttonText}>add    </Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonRemove}>
            <View style={styles.buttonAddWrap}>

            <Image source={require('../../images/iconTrashW.png')}
                   style={{width: 15, height: 15}}/>
            <Text style={styles.buttonText}>remove</Text>
            </View>
          </TouchableOpacity>

        </View>
      </View>
    );
  }

  render() {
    const userId = Meteor.user()._id;
    const partners= Meteor.user();
    let numberNotif = Meteor.user().notifications;
    if(numberNotif === undefined )
    {numberNotif=0;}
    Meteor.subscribe('users', userId);
      return (
        <View style={styles.container}>

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
            selector={{_id: {$ne: userId}}}
            renderRow={this.renderRow}/>

        </View>
      );
    }
}
export default Scene;
//I think the issue is that you're actually calling this.showCallInfo instead of passing it as your onPress function for your new button for onpress