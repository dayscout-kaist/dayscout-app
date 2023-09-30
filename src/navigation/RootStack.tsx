import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import type { RootStackParamList } from "@/navigation/types";
import { HomeTab } from "@/navigation/HomeTab";
import { FoodInfo, ImageSearch, SelectIntake, TextSearch } from "@/screens";

const Stack = createStackNavigator<RootStackParamList>();

export const RootStack: React.FC = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="HomeTab">
      <Stack.Screen
        name="HomeTab"
        component={HomeTab}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="ImageSearch" component={ImageSearch} />
      <Stack.Screen name="TextSearch" component={TextSearch} />
      <Stack.Screen name="FoodInfo" component={FoodInfo} />
      <Stack.Screen name="SelectIntake" component={SelectIntake} />
    </Stack.Navigator>
  </NavigationContainer>
);
