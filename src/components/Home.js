import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Profile from './Profile';
import Settings from './Settings';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

function RenderHome({ navigation, route }) {
    const { login } = route.params;
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hello {login}, {'\n'}Welcome to your home page!!!!</Text>
        </View>
    )
}

export default function Home({ route, navigation }) {
    return(
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: '#7cb124',
            }}
        >
            <Tab.Screen 
                name="Home" 
                component={RenderHome}
                options={{tabBarIcon: ({  color, size }) => (
                    <Icon name="home" color={color} size={size} />
                )}} 
                initialParams={{login: route.params.login}} 
            />
            <Tab.Screen 
                name="Profile" 
                component={Profile} 
                options={{tabBarIcon: ({  color, size }) => (
                    <Icon name="user" color={color} size={size} />
                )}}
            />
            <Tab.Screen 
                name="Setting" 
                component={Settings} 
                options={{tabBarIcon: ({  color, size }) => (
                    <Icon name="cogs" color={color} size={size} />
                )}}
            />
        </Tab.Navigator>
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