import React, {Component} from 'react';
import {Navigator} from 'react-native';

import Scene from './scene';

import {Register} from '../../actions';

class Container extends Component {         //Container formulaire d'inscription
  constructor() {
    super();
    this.goBack = this.goBack.bind(this);
  }
  goBack = () => {        //Appel du navigateur passé en paramètre
    this.props.navigator.pop();
  };
  registerHandler = creds => {        //Appel de l'action register
    console.log('containerreroutes :'+ creds.username);
    return Register(creds);
  };
  render() {
    return (
      <Scene                           //Appel de la scene avec passage de l'accès aux différentes fonctions définies plus haut
        onSubmit={this.registerHandler}
        goBack={this.goBack}
      />
    );
  }

}

Container.propTypes = {               //??
  navigator: React.PropTypes.instanceOf(Navigator).isRequired
};

export default Container;
