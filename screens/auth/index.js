import React, { Fragment } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "react-native";

import { RFValue } from "react-native-responsive-fontsize";

import LoginScreen from './Login'
import SignUpScreen from './SignUp'
import StartScreen from './Start'


const Stack = createStackNavigator();

export default function AuthNavigator(){

    return(
        <Fragment>
            <StatusBar barStyle={"light-content"} />
            <Stack.Navigator initialRouteName={"login"}>
            <Stack.Screen
                name={"start"}
                component={StartScreen}
                options={{ headerShown: false }}
            />
                <Stack.Screen
                    name={"login"}
                    component={LoginScreen}
                    options={({ navigation }) => ({
                      headerStyle: {
                        backgroundColor: Colors.secondary,
                        shadowOpacity: 0,
                        elevation: 0,
                      },
                      headerBackTitle: "Back",
                      headerTitle: "",
                      headerTintColor: Colors.white,
                      headerLeftContainerStyle: {
                        marginLeft: RFValue(10),
                      }
                    })}
                    
                />

<Stack.Screen
          name={"signup"}
          component={SignUpScreen}
          options={{
            headerStyle: {
              backgroundColor: Colors.secondary,
              shadowOpacity: 0,
              elevation: 0,
            },
            headerBackTitle: "Back",
            headerTitle: "",
            headerTintColor: Colors.white,
            headerLeftContainerStyle: {
              marginLeft: RFValue(10),
            },
          }}
        />
            </Stack.Navigator>
        </Fragment>
    )
}