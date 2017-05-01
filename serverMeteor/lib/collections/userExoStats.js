import {Mongo} from 'meteor/mongo';

import {SimpleSchema} from 'meteor/aldeed:simple-schema';

const UserExoStatsSchema = new SimpleSchema({
  exerciseId: {
    type: String,
    blackbox: true
  },
  userId: {
    type: String,
    blackbox: true
  },
  weight: {
    type: [Number],
    optional: true,
    blackbox: true
  },
  reps: {
    type: Number,
    optional: true,
    blackbox: true
  },
  levelExo: {
    type: String,
    optional: true,
    blackbox: true
  },
  date: {
    type: Date,
    optional: true,
    blackbox: true
  }
});


const UserExoStats = new Mongo.Collection('stats');

UserExoStats.attachSchema(UserExoStatsSchema);

export default UserExoStats;