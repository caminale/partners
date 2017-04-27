import {Meteor} from 'meteor/meteor';

const Math = require('mathjs');

import {UserExoStats} from '../../lib/collections';

import {Accounts} from '../../lib/collections';



const calculLevelUser = () => {
  const userId = Meteor.user()._id;
  let levelUser=0;

  // const user=Accounts.find({_id: userId});
  // levelUser=user.profile.level;
  if (!user) {
    return;
  }
  Accounts.update({userId: user._id},{$set:{profile:{level:levelUser}}});

};
export default calculLevelUser;
