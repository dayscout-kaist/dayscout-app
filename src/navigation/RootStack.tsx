import React from "react";
import {
  DefaultTheme,
  NavigationContainer,
  type Theme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { HomeTab } from "@/navigation/HomeTab";
import type { RootStackParamList } from "@/navigation/types";
import {
  AddReview,
  Camera,
  EditProfile,
  FoodCalculate,
  FoodDetail,
  FoodReview,
} from "@/screens";
import { colors } from "@/styles";

import { HeaderBackImage } from "./Header";

const AppTheme: Theme = {
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    background: colors.gray50,
    card: colors.white,
    border: colors.gray50,
  },
};

const Stack = createStackNavigator<RootStackParamList>();

export const RootStack: React.FC = () => (
  <NavigationContainer theme={AppTheme}>
    <Stack.Navigator
      initialRouteName="HomeTab"
      screenOptions={{
        headerBackTitleVisible: false,
        headerBackImage: HeaderBackImage(colors.gray500),
      }}
    >
      <Stack.Screen
        name="HomeTab"
        component={HomeTab}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Camera" component={Camera} />
      <Stack.Screen
        name="FoodDetail"
        component={FoodDetail}
        options={{
          title: "",
          headerTransparent: true,
          headerBackImage: HeaderBackImage(colors.white),
        }}
      />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="FoodReview" component={FoodReview} />
      <Stack.Screen name="AddReview" component={AddReview} />
      <Stack.Screen name="FoodCalculate" component={FoodCalculate} />
    </Stack.Navigator>
  </NavigationContainer>
);
