import React, { useEffect } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { useForm } from 'react-hook-form'

export default function SignUp({ navigation }) {

    const onSubmit = data => {
        console.log("Form data: ", data);
        navigation.navigate('Login');
    }

    const { register, handleSubmit, setValue } = useForm();

    useEffect(() => {
        register('name');
        register('email');
        register('password');
    }, [register])

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Create an account
            </Text>
            <Text style={styles.text}>Name</Text>
            <TextInput style={styles.input} onChangeText={text => {setValue('name', text)}} />

            <Text style={styles.text}>Email</Text>
            <TextInput style={styles.input}  onChangeText={text => {setValue('email', text)}} />

            <Text style={styles.text}>Password</Text>
            <TextInput style={styles.input}  onChangeText={text => {setValue('password', text)}} />

            <TouchableOpacity
                style={styles.button}
                onPress={handleSubmit(onSubmit)}
            >
                <Text style={styles.btnText}>Submit</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#070719',
    },
    title: {
        justifyContent: 'center',
        alignSelf: 'center',
        padding: 10,
        marginBottom: 20,
        fontSize: 24,
        color: '#fff',
        fontWeight: 'bold'
    },
    text: {
        color: '#ccc',
        marginTop: 10,
        marginLeft: 10
    },
    input: {
        backgroundColor: '#ccc',
        width: 330,
        height: 42,
        margin: 10,
        borderBottomWidth: 2,
        borderBottomColor: '#7cb124',
        borderRadius: 8
    },
    button: {
        justifyContent: 'center',
        alignSelf: 'center',
        width: 330,
        height: 48,
        margin: 10,
        marginTop: 36,
        backgroundColor: '#7cb124',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    }
})