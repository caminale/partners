import Meteor from 'react-native-meteor';
import {Accounts} from 'react-native-meteor';


const forgot = creds => {
  console.log('holilao88i');

  /*Accounts.forgotPassword = function (creds) {

   console.log('holila88888');
   if(Meteor.call("forgotPassword", creds))
   {
   console.log('c est gagné');


   }
   else {
   console.log('raté morray');
   }


   }*/

  Accounts.forgotPassword({email: creds.email}, (error) => {
    if (error) {
      console.log(error.reason);
      console.log('cest raté');

    } else {
      console.log('cest gagné');
     //  Accounts.connection.call("forgotPassword", {email: 'darkjuju78@hotmail.fr'});

      // success
    }
  });

};

export default forgot;
/*
 let email = this.refs.email.value;
 Accounts.forgotPassword({email: email}, function (e, r) {
 if (e) {
 console.log(e.reason);
 } else {
 // success
 }
 });*/