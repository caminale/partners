import React, {Component} from 'react';
import Meteor, {createContainer} from 'react-native-meteor';
import ReactNative from 'react-native';
import {MeteorListView} from 'react-native-meteor';
import styles from './styles';
import {Button} from '../../components';

const {
  View,
  TouchableOpacity,
  Text,
  Image
} = ReactNative;

class Scene extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foreignUserId: '',
    };
  };
  addConversation=(p_foreignUserId)=>{
    console.log('cacacaca'+p_foreignUserId);
  };
  goBack=()=> {
    this.props.goBack();
  };
  openProfile = (p_User) => {
    console.log(p_User);
    this.props.openProfile(p_User);
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
                {`${user.profile.firstName}, ${user.profile.age} sent you a request`}
              </Text>
            </View>
          </View>
          <View style={styles.containerButtonAddRemove}>
            <TouchableOpacity
              onPress={() =>this.openProfile(user)}
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


      )
  };
  render() {
    const userId = Meteor.user()._id;
    Meteor.subscribe('users', userId);

    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.buttonBack} onPress={this.goBack}>
          <Image source={require('../../images/iconBackW.png')}
                 style={{width: 30, height: 30}}/>
          <Text style={styles.buttonText}>go back</Text>
        </TouchableOpacity>
        <Text style={styles.textTitle}> Notification</Text>
        <MeteorListView
          enableEmptySections
          collection="users"
          selector={{$and: [{"request": userId}, {_id: {$nin: Meteor.user().removeUser }}
            ]}}
          renderRow={this.renderRow}/>
      </View>
    );
  }
}
export default createContainer(params => {

  const userId = Meteor.user()._id;
  // const foreignUserId=Meteor.user().partners.;
  Meteor.subscribe('users', userId);

  return {
    accounts: Meteor.collection('users')
  };
}, Scene);//will reactively rerender the wrapped component



