import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AuthNavigator from '../screens/auth';
import Tabs from '../screens/main';

const Stack = createStackNavigator();

const Navigator = () => {
    return (
      <Fragment>
        <NavigationContainer>
          <Stack.Navigator initialRouteName={"Auth"}>
            <Stack.Screen
              name={"Auth"}
              component={AuthNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name={"Tab"}
              component={Tabs}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Fragment>
    );
  };
  
  export default Navigator;
  