import React, { Component } from 'react';
import {
    View
} from 'react-native';
import InscripButton from './InscripButton';

export default class InscripContainer extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <View>
                <InscripButton goToInscript = {this.goToInscript} />
            </View>
        )
    }
    openMenu = () => {
        alert("voici un joli menu");
    };

    goToInscript = () => {
        this.props.navigator.push({
            name: 'Home',
            title: 'Partners',
            openMenu: this.openMenu
        });
    };
}
