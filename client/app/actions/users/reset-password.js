import Meteor from 'react-native-meteor';
import {Accounts} from 'react-native-meteor';


const forgot = creds => {
  console.log('holilaoi');

   return new Promise((resolve, reject) => {
     Accounts.forgotPassword = function (creds) {

       console.log('holila88888');
       Meteor.call("forgotPassword", creds);
       resolve();


     }
   });
  // });
  /*
   return Meteor.forgotPassword = function(creds) {
   if (!creds.email) {

   return reportError(new Meteor.Error(400, "Must pass options.email"), callback);
   }

   if (callback) {
   Accounts.connection.call("forgotPassword", options, callback);
   } else {
   Meteor.call("forgotPassword", creds);console.log('holila88888');
   }
   };*/
};

export default forgot;