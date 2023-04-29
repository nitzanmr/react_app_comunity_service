import React from 'react';
import { Image, ImageBackground , StyleSheet, View} from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground 
        style={styles.background}
        source={require('../assets/Background.jpg')}>
            <Image source={require('../assets/icon.png')} style={styles.logo}/>
            <View style={styles.loginButton}></View>
            <View style={styles.registerButton}></View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    loginButton: {
        width: '100%',
        height: 80,
        backgroundColor: '#fc5c65',
    },
    registerButton: {
        width: '100%',
        height: 80,
        backgroundColor: '#4ecdc4',
    },
    logo: {
        width: 100,
        height: 100,
        position: 'absolute',
        top: 70,
    }
})

export default WelcomeScreen;