/**
 * Created by julien on 06/03/17.
 */

import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    StyleSheet
} from 'react-native';

export default HomeButton = (props) => {
    return (
        <View style = {styles.container}>
            <Text style={styles.texte}>
                Address Mail
            </Text>
            <TextInput
                style={{height: 40,width:180, borderColor: 'gray', borderWidth: 3}}
                keyBoardType="email-address"
                placeholder="Entrez votre adresse mail"

            />
            <Text style={styles.texte}>
                Mot De Passe
                {'\n'}
            </Text>
            <TextInput
                style={{height: 40,width:180, borderColor: 'gray', borderWidth: 3}}
                placeholder="Entrez votre Mot De Passe"
                secureTextEntry={true}
            />
            <Text>
                {'\n'}
            </Text>
            <TouchableOpacity
                style = {styles.button}
                onPress = {props.goToAbout}>
                <Text>
                    Se connecter
                </Text>
            </TouchableOpacity>

                <Text style={styles.texte}>
               OU
                </Text>


            <TouchableOpacity
                style = {styles.button}
                onPress = {props.goToInscrip}>
                <Text>
                    S'inscrire
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        marginTop: 100,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    texte: {
        paddingVertical: 15,
        color: 'black',
        justifyContent: 'center',
        fontSize: 15
    },
    button: {
        borderWidth: 1,
        padding: 10,
        borderColor: 'black'
    }
})