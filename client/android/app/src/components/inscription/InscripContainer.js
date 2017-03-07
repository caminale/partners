/**
 * Created by julien on 06/03/17.
 */

import React, { Component } from 'react';
import {
    View
} from 'react-native';
import InscripButton from '/home/julien/workspace/partners/client/android/app/src/components/inscription/InscripButton'

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
    openMenu = () =>{
        alert("voici un joli menu")
    }

    goToInscript = () => {
        this.props.navigator.push({
            name: 'Home',
            title: 'Partners',
            openMenu: this.openMenu
        });
    }

}