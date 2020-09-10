import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './components/Login';
import Home from './components/Home';
import SignUp from './components/SignUp';

const style = {
    title: '',
    headerStyle: {
      backgroundColor: '#070719',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      textAlign: 'center',
    },
  }

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light"   />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="Login" 
            component={Login}  
            options={style}
          />
          <Stack.Screen 
            name="Home" 
            component={Home} 
            options={style}
          />
          <Stack.Screen
            name="Sign Up"
            component={SignUp}
            options={style}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
