import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Fragment } from "react";
import { Platform } from 'react-native'
import Colors from '../../constants/colors.json';

import { Ionicons, AntDesign } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

import Screen1 from './Screen1'
import Screen2 from './Screen2'
import Screen3 from './Screen3'

export default function Tabs(){
    const top = Platform.OS === "android" ? 0 : 15

    return(
        <Fragment>
            <Tab.Navigator
                tabBarOptions={{
                    showLabel: false,
                    style: {
                      position: "absolute",
                      bottom: RFValue(25),
                      left: RFValue(8),
                      right: RFValue(8),
                      borderRadius: RFValue(20),
                      borderTopWidth: 0,
                      backgroundColor: "#1e1e1e",
                    },
                  }}
            >
                <Tab.Screen
                options={{
                    tabBarIcon: ({ focused }) => {
                      return (
                        <View
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            borderColor: "#fff",
                            top: RFValue(top),
                            borderRadius: RFValue(10),
                          }}
                        >
                          <Ionicons
                            name={"ios-pie-chart-outline"}
                            color={focused ? Colors?.primary : Colors?.gray}
                            size={RFValue(22)}
                          />
                        </View>
                      );
                    },
                  }}
                  name={"Screen1"}
                  component={Screen1}
                />

                <Tab.Screen
                        options={{
                            tabBarIcon: ({ focused }) => {
                            return (
                                <View
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    borderColor: "#fff",
                                    top: RFValue(top),
                                    borderRadius: RFValue(10),
                                }}
                                >
                                <Ionicons
                                    name={"ios-grid-outline"}
                                    color={focused ? Colors?.primary : Colors?.gray}
                                    size={RFValue(25)}
                                />
                                </View>
                            );
                            },
                        }}
                        name={"Screen2"}
                        component={Screen2}
                />
            </Tab.Navigator>
        </Fragment>
    )
}