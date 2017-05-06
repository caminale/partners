import {Mongo} from 'meteor/mongo';

import {SimpleSchema} from 'meteor/aldeed:simple-schema';

const UserExoStatsSchema = new SimpleSchema({
  exerciseId: {
    type: String,
  },
  userId: {
    type: String,
  },
  weight: {
    type: [Number],
    optional: true,
  },
  reps: {
    type: [Number],
    optional: true,
  },
  levelExo: {
    type: String,
    optional: true,
  },
  date: {
    type: [Date],
    optional: true,
  }
});


const UserExoStats = new Mongo.Collection('stats');

UserExoStats.attachSchema(UserExoStatsSchema);

export default UserExoStats;