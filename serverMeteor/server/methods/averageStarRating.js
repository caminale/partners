import {Meteor} from 'meteor/meteor';

const averageStarRating = p_starRating =>{

  const partnermarked = Meteor.users.findOne({_id: p_starRating.userId});
  const actualAverage = partnermarked.averageStarRating;
  const ratesNumber = partnermarked.ratesNumber;
  let newAverage;
  if( isNaN(actualAverage) || actualAverage === undefined){
    newAverage = p_starRating.mark;
  }
 else {
     newAverage = (((ratesNumber - 1)*actualAverage)+p_starRating.mark)/ratesNumber;
  }
  console.log(partnermarked+actualAverage+ratesNumber+newAverage);

  Meteor.users.update({_id: p_starRating.userId}, {
      $set: {
        averageStarRating: newAverage.toFixed(1)
      },
    }, { multi: true }, error => {
      if (error) {
        throw new Meteor.Error(500, error.message);
      } else {
        console.log("successful averageStar");
      }
    });

};
export default averageStarRating;