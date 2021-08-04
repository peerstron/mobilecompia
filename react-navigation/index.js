import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import StackNavigator from './Screens/index';

const AppNavigator = ()=>{

    return(
        <NavigationContainer>
            <StackNavigator />
        </NavigationContainer>
    )
}

export default AppNavigator;