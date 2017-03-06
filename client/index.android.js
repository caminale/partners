/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react'
import {
    AppRegistry,
    View
} from 'react-native'
import Router from './android/app/src/components/Router'

class partnersV002 extends Component {
    render() {
        return (
            <Router />
        )
    }
}

AppRegistry.registerComponent('partnersV002', () => partnersV002)