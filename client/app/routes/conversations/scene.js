import React, {Component} from 'react';
import ReactNative from 'react-native';
import Meteor, {MeteorListView} from 'react-native-meteor';

import styles from './styles';

const {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput
} = ReactNative;

class Scene extends Component {
  constructor(props) {
    super(props);
    Meteor.subscribe('chats',Meteor.user()._id);
  }

  renderHeader() {

    return (

      <View style={styles.containerHeader}>
        <TextInput
          style={styles.input}
          placeholder="Search..."
          onChangeText={(text) => console.log('searching for ', text)}
        />
      </View>
    );
  };

  renderItem = conversation => {
    if( Meteor.user() !== null) {
      const userId = Meteor.user()._id;
      let partnerId;
      let partner;

      function findPartner(partner) {
        return partner._id === partnerId;
      }

      if (userId === conversation.users[0]) {
        partnerId = conversation.users[1];
        partner = this.props.accounts.find(findPartner);
      }
      else {
        partnerId = conversation.users[0];
        partner = this.props.accounts.find(findPartner);
      }
      if (partner !== undefined) {
        const chatAndUser = {
          conversationId: conversation,
          foreignUser: partner
        }
        return (
          <TouchableOpacity
            onPress={() => this.props.selectConversation(chatAndUser)}
          >
          <View style={styles.containerMeteorListView}>
            <View style={styles.containerPhotoText}>
              <Image
                source={{uri: partner.profile.picture}}
                style={styles.photo}/>
              <View style={styles.wrapNameAge}>
                <Text style={styles.text}>
                  {`${partner.profile.firstName}`}

                </Text>
              </View>
            </View>
          </View>
          </TouchableOpacity>
        );
      }
      //onPress={() => this.props.selectConversation(conversation)}
      else {
        setTimeout(function () {
          console.log("lolo");
          console.log('autre part');
        }, 50);
        return (
          <View style={styles.row}>

          </View>

        );
      }
    }
  };

  render() {
    const userId= Meteor.user()._id;
    return (
      <View style={styles.container}>
        <MeteorListView
          collection="chats"
          selector={{users: userId}}
          enableEmptySections
          renderRow={this.renderItem}
          renderHeader={this.renderHeader}
        />
      </View>
    );
  }
}

export default Scene;
