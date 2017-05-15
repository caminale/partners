import {Meteor} from 'meteor/meteor';


import {UserExoStats} from '../../lib/collections';


const calculLevelExo = (exerciceId,weight,reps) => {
  const user = Meteor.user();
  let level=0;
  //for benchpress
  if(exerciceId==='n5iCkhmR5ADkZPbNs') {
    level = (10 * (1 - Math.exp(-(weight - 30) / 30)));
    console.log('bench : '+level);
  }
  //for squats
  else if(exerciceId==='Z2asvxEdRRBWbanM8') {
    level = (10 * (1 - Math.exp(-(weight - 50) / 50)));
    console.log('squats : '+level);
  }
  //for dips
  else if(exerciceId==='4AMqjmCqkhADgjmrS') {
    level = (10 * (1 - Math.exp(-(reps-0) / 15)));
    console.log('dips: '+level);
  }
  //for lat pull down
  else if(exerciceId==='CrzMaxQ4qKLWZHKLa') {
    level = (10 * (1.12 - Math.exp(-(weight-10) / 50)));
    console.log('lat : '+level);
  }

  if (!user) {
    return;
  }
  UserExoStats.update({userId: user._id,exerciseId: exerciceId},{$set:{levelExo: level}});

};
export default calculLevelExo;
