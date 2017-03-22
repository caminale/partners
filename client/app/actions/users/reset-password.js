import Meteor from 'react-native-meteor';

const forgot = creds => {
  //return //new Promise((resolve, reject) => {
   // Meteor.forgotPassword(creds.email)   // if (err) {
  //      reject(err);

   //   resolve();
  //  });
  //});

 return Meteor.forgotPassword = function(options, callback) {console.log('holila');
    if (!options.email) {

      return reportError(new Meteor.Error(400, "Must pass options.email"), callback);
    }

   /* if (callback) {
      Accounts.connection.call("forgotPassword", options, callback);
    } else {
      Accounts.connection.call("forgotPassword", options);
    }*/
  };
};

export default forgot;