/**
 * Created by julien on 06/03/17.
 */

import React, { Component } from 'react'
import {
    StyleSheet,
    View,
} from 'react-native'

export default class AboutContainer extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <View>

                <text style={styles.texte}>
                    {'\n'} {'\n'} {'\n'} {'\n'} {'\n'} {'\n'}
                    Connection reussi !
                </text>
            </View>
        )
    }
}

const styles = StyleSheet.create ({

    texte: {
        paddingVertical: 15,
        color: 'black',
        justifyContent: 'center',
        fontSize: 15
    }

})