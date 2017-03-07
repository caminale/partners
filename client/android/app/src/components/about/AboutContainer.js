/**
 * Created by julien on 06/03/17.
 */

import React, { Component } from 'react'
import {
    StyleSheet,
    View,
} from 'react-native'

import AboutButton from '/home/julien/workspace/partners/client/android/app/src/components/about/AboutButton'


export default class AboutContainer extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <View>

                <AboutButton goToAbout = {this.goToAbout}/>

            </View>
        )
    }
}

