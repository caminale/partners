import {Mongo} from 'meteor/mongo';
import {SimpleSchema} from 'meteor/aldeed:simple-schema';

const statSchema = new SimpleSchema({

  pullup: {
    type: Number
  },
  pushup: {
    type: Number
  },
  level: {
    type: Number
  },
  user: {
    type: String
  }
});
/**
 * @summary  Collection StatsBeginner for subscribe it write :

 - **
 * @locus Anywhere
 * @memberOf Mongo.Collection
 *  @param {String} title  title of the conversation
 *  @param {String} description of the conversation
 *  @param {Array} users (array of String)
 *  permit to have the id of the users chat
 *  @param {Date} lastpost know the lastpost for load only the last post
 *  and not all the conversation

 **/

const StatsBeginner = new Mongo.Collection('statsBeginner');

StatsBeginner.attachSchema(statSchema);

export default StatsBeginner;
