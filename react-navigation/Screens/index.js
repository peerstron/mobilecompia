import React from 'react'
import {createStackNavigator } from '@react-navigation/stack'


import HomeScreen from './Home';
import HomeDetailsScreen from './HomeDetails';

const Stack = createStackNavigator();

export default function StackNavigator(){

    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={HomeDetailsScreen} />
        </Stack.Navigator>
    )
}