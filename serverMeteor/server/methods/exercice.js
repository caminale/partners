import {Exercise} from '../../lib/collections';

import {Meteor} from 'meteor/meteor';

export default {

  addExo: exo => {


    const userId = Meteor.user()._id;
    const exoId= exo._id;
    if (!userId) {
      return;
    }

    Exercise.insert({
      name: exo.name,
      category: exo.category,
      difficulty: exo.difficulty,
    });
  }
};
