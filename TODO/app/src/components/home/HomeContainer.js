import React, { Component } from 'react'
import {
    View
} from 'react-native';
import HomeButton from './HomeButton';

export default class HomeContainer extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <View>
                <HomeButton goToAbout = {this.goToAbout}
                goToInscrip = {this.goToInscrip}>

                </HomeButton>
            </View>
        )
    }
    openMenu = () =>{
        alert("voici un joli menu")
    }
    goToAbout = () => {
        this.props.navigator.push({
            name: 'About',
            title: '',
            openMenu: this.openMenu
        });
    }
    goToInscrip = () => {
        this.props.navigator.push({
            name: 'Inscription',
            title: '',
            openMenu: this.openMenu
        });
    }

}