import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    Navigator,
    TouchableOpacity
} from 'react-native';

import AboutContainer from './about/AboutContainer';
import HomeContainer from './home/HomeContainer';
import InscripContainer from './inscription/InscripContainer';

export default class Router extends Component {
    constructor(){
        super()
    }
    render() {
        return (
            <Navigator
                initialRoute = {{ name: 'Home', title: 'Partners' }}
                renderScene = { this.renderScene }
                navigationBar = {
               <Navigator.NavigationBar
                  style = { styles.navigationBar }
                  routeMapper = { NavigationBarRouteMapper } />
            }
            />
        );
    }
    renderScene(route, navigator) {
        if(route.name == 'Home' ) {
            return (
                <HomeContainer
                    navigator = {navigator}
                    {...route.passProps}
                />
            )
        }


        if(route.name == 'About') {
            return (
                <AboutContainer
                    navigator = {navigator}
                    {...route.passProps}
                />
            )
        }
        if(route.name == 'Inscription') {
            return (
                <InscripContainer
                    navigator = {navigator}
                    {...route.passProps}
                />
            )
        }
    }
}

var NavigationBarRouteMapper = {
    LeftButton(route, navigator, index, navState) {
        if(index > 0) {
            return (
                <TouchableOpacity
                    onPress = {() => { if (index > 0) { navigator.pop() } }}>
                    <Text style={ styles.leftButton }>
                        Back
                    </Text>
                </TouchableOpacity>
            )
        }
        else { return null }
    },
    RightButton(route, navigator, index, navState) {
        if (route.openMenu) return (
            <TouchableOpacity
                onPress = { () => route.openMenu() }>
                <Text style = { styles.rightButton }>
                    { route.rightText || 'Menu' }
                </Text>
            </TouchableOpacity>
        )
    },
    Title(route, navigator, index, navState) {
        return (
            <Text style = { styles.title }>
                {route.title}
            </Text>
        )
    }
};

const styles = StyleSheet.create({
    navigationBar: {
        backgroundColor: 'grey',
    },
    leftButton: {
        color: '#ffffff',
        margin: 19,
        fontSize: 17,
    },
    title: {
        paddingVertical: 15,
        color: '#ffffff',
        justifyContent: 'center',
        fontSize: 22
    },
    rightButton: {
        color: 'white',
        margin: 10,
        fontSize: 16
    }
})