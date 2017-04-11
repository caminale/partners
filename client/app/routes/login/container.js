import React, {Component} from 'react';

import Scene from './scene';

import {Login, LoginFacebook, ResetPassword} from '../../actions';

class Container extends Component {
  constructor() {
    super();
    this.goBack = this.goBack.bind(this);
  }
  goBack() {            //Appel du navigateur passé en paramètre pour revenir en arrière (pop)
    this.props.navigator.pop();
  }
  loginHandler = creds => {       //appel de l'ACTION login pour la connexion en lui passant le paramètre cred (contenu ? )
    return Login(creds);
  };
  loginFacebookHandler = () => {      //Appel de l'ACION LoginFacebook
    return LoginFacebook();
  };
  forgotHandler = creds => {  //Appel de l'ACION ResentPasseword
    return ResetPassword(creds);
  };
  render() {
    return (
      <Scene                          //Appel de la scene en lui passant les accèes au différentes fonction définies plus haut
        onSubmit={this.loginHandler}
        onForgot={this.forgotHandler}
        onSubmitFacebook={this.loginFacebookHandler}
        goBack={this.goBack}
      />
    );
  }
}

export default Container;
