import {Meteor} from 'meteor/meteor';
import averageStarRating from './averageStarRating'

export default {
  addRating: p_rate => {
    const user = Meteor.user();
    console.log(p_rate);
    Meteor.users.update({_id: p_rate.userId}, {
      $push: {
        rating: {
          mark: p_rate.mark,
          complete: true,
          opinion: p_rate.opinion,
          userId: user._id
        }
      },
      $inc: {
          ratesNumber: 1
      }
    }, { multi: true }, error => {
      if (error) {
        throw new Meteor.Error(500, error.message);
      } else {
        console.log("add rates Successful");
      }
    });
    averageStarRating(p_rate);
  }
};