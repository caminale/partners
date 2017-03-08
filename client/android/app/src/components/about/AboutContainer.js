import React, { Component } from 'react'
import {
    StyleSheet,
    View,
} from 'react-native';

import AboutButton from './AboutButton';

export default class AboutContainer extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <View>
                <AboutButton />
            </View>
        )
    }
}
