/**
 * Created by julien on 06/03/17.
 */

import React, { Component } from 'react';
import {
    View
} from 'react-native';
//import InscripButton from '/home/julien/workspace/partners/client/android/app/src/components/inscription/InscripButton'

export default class InscripContainer extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <View>
                <InscripButton goToInscrip2 = {this.goToInscrip2} />
            </View>
        )
    }
    openMenu = () =>{
        alert("voici un joli menu")
    }

    goToInscrip2 = () => {
        this.props.navigator.push({
            name: 'Inscription2',
            title: 'inscription',
            openMenu: this.openMenu
        });
    }

}