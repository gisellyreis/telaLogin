import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Profile() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Profile Page</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#070719',
    },
    title: {
        padding: 10,
        width: 300,
        fontSize: 32,
        color: '#fff',
        fontWeight: 'bold'
    }
})