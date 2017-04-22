import {Mongo} from 'meteor/mongo';
import {SimpleSchema} from 'meteor/aldeed:simple-schema';


Schema = {};

Schema.type = new SimpleSchema({
  reps: {
    type: Number
  },
  weigth: {
    type: Number
  }
});

const statSchema = new SimpleSchema({
  user: {
    type: String
  },
  level: {
    type: Number
  },
  benchPress: {
    type: Number
  },
  Squats: {
    type: Number
  },
  deadLift:{
    type: Number
  }
});

const StatsExpert = new Mongo.Collection('statsExpert');

StatsExpert.attachSchema(statSchema);

export default StatsExpert;

