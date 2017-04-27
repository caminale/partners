  import {Mongo} from 'meteor/mongo';

import {SimpleSchema} from 'meteor/aldeed:simple-schema';

const ExerciseSchema = new SimpleSchema({
  _id: {
    type: String,
    regEx: SimpleSchema.RegEx.Id
  },
  name: {
    type: String
  },
  category: {
    type: String
  },
  difficulty: {
    type: Number
  },
  // restTime:{
  //   type: Number,
  //   optional: true
  // }
});


const Exercise = new Mongo.Collection('exercise');

Exercise.attachSchema(ExerciseSchema);

export default Exercise;

