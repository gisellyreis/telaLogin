import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image } from 'react-native'

export default function Login({ navigation }) {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin() {
        console.log({login, password});
        navigation.navigate('Home', {login: login});
        setLogin('');
        setPassword('');
    }

    function handleSignup() {
        console.log('Go to Sign Up page');
        navigation.navigate('Sign Up');
    }

    return (
        <View style={styles.container}>
            <Icon size={120} name="user" size={120} color="#7cb124" />
            
            <TextInput
                placeholder="Digite seu login"
                placeholderTextColor="#000"
                onChangeText={(text) => setLogin(text)}
                style={styles.input}
            />
            <TextInput
                placeholder="Digite sua senha"
                placeholderTextColor="#000"
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
                style={styles.input}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={handleLogin}
            >
                <Text style={styles.textLogin}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={handleSignup}
            >
                <Text style={styles.textSignup}>Sign Up</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#070719'
    },
    input: {
        width: 300,
        marginTop: 10,
        padding: 10,
        backgroundColor: '#fff',
        fontSize: 16,
        borderRadius: 8,
    },
    button: {
        width: 300,
        height: 48,
        marginTop: 36,
        marginBottom: 36,
        backgroundColor: '#7cb124',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textLogin: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    },
    textSignup: {
        color: '#cccd',
        fontSize: 16,
    }
})