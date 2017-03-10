import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    StyleSheet
} from 'react-native';

export default AboutButton = (props) => {
    return (
        <View style = {styles.container}>
            <Text style={styles.texte}>
                Vous etes bien connecté
            </Text>
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
        fontSize: 30
    },
    button: {
        borderWidth: 1,
        padding: 10,
        borderColor: 'black'
    }
});
