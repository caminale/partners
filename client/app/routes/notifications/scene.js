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
  Picker,
  Image,
  TextInput
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
    console.log(p_User)
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
              <Text style={styles.text}>
                {`${user.profile.firstName} ${user.profile.lastName} ` }
                  add you
              </Text>
              <Text style={styles.text}>
                {`${user.profile.age} `} ans
              </Text>
            </View>
          </View>
          <View style={styles.containerButtonAddRemove}>
            <TouchableOpacity
              style={styles.button}
              onPress={()=>this.openProfile(user)}>
              <Text>Voir profile</Text>
            </TouchableOpacity>

          </View>
        </View>


      )
  }
  render() {
    const userId = Meteor.user()._id;
    Meteor.subscribe('users', userId);

    return (

      <View style={styles.container}>
        <Text style={styles.textTitle}> Notification</Text>
        <MeteorListView
          enableEmptySections
          collection="users"
          selector={{"partners.request": userId}}
          renderRow={this.renderRow}/>

        <Button onPress={this.goBack}
                label={'back'}/>
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



