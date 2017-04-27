import {Meteor} from 'meteor/meteor';

import {Accounts} from '../../lib/collections';

export default {

  updateProfile: profile => {
    const user = Meteor.user();

    if (!user) {
      return;
    }
    Accounts.update(user._id,
    {
      profile: {
        firstName: profile.firstName,
        lastName: profile.lastName,
        gender: profile.gender,
        locale: profile.locale,
        age: profile.age,
        weight: profile.weight,
        height: profile.height
    }});
  }
};

