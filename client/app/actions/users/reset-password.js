import {Accounts} from 'react-native-meteor';

const forgot = creds => {
  const emailu = 'darkjuju78@hotmail.fr';

  Accounts.forgotPassword({email: emailu}, err => {
    if (err) {
      if (err.message === 'User not found [403]') {
        console.log('This email does not exist.');
      } else {
        console.log('We are sorry but something went wrong.');
      }
    } else {
      console.log('Email Sent. Check your mailbox.');
    }
  });
    /*
     Accounts.forgotPassword({email: 'darkjuju78@hotmail.fr'}, (error) => {
     if (error) {
     console.log(error.reason);
     console.log('cest raté');

     } else {
     console.log('cest gagné');
     //  Accounts.connection.call("forgotPassword", {email: 'darkjuju78@hotmail.fr'});

     // success
     }
     }); */
};

export default forgot;
/*
 Let email = this.refs.email.value;
 Accounts.forgotPassword({email: email}, function (e, r) {
 if (e) {
 console.log(e.reason);
 } else {
 // success
 }
 }); */
