/**
 * Created by julien on 06/03/17.
 */

import React, { Component } from 'react'
import {
    View
} from 'react-native'
import HomeButton from '/home/julien/WebstormProjects/partnersV002/android/app/src/components/home/HomeButton'

export default class HomeContainer extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <View>
                <HomeButton goToAbout = {this.goToAbout}/>
            </View>
        )
    }
    openMenu = () =>{
        alert("voici un joli menu")
    }
    goToAbout = () => {
        this.props.navigator.push({
            name: 'About',
            title: 'Inscription',
            openMenu: this.openMenu
        });
    }
}