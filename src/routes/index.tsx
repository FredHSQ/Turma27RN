import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { BottomTabNavigator } from "./navigators/bottomTabNavigator";

export const Routes = () => {
    return <NavigationContainer>
       <BottomTabNavigator />
    </NavigationContainer>
}