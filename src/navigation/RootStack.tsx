import React from "react";
import { NavigationContainer } from "@react-navigation/native";
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

const Stack = createStackNavigator<RootStackParamList>();

export const RootStack: React.FC = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="HomeTab">
      <Stack.Screen
        name="HomeTab"
        component={HomeTab}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Camera"
        component={Camera}
        options={{ headerBackTitleVisible: false }}
      />
      <Stack.Screen
        name="FoodDetail"
        component={FoodDetail}
        options={{ headerBackTitleVisible: false }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{ headerBackTitleVisible: false }}
      />
      <Stack.Screen
        name="FoodReview"
        component={FoodReview}
        options={{ headerBackTitleVisible: false }}
      />
      <Stack.Screen
        name="AddReview"
        component={AddReview}
        options={{ headerBackTitleVisible: false }}
      />
      <Stack.Screen
        name="FoodCalculate"
        component={FoodCalculate}
        options={{ headerBackTitleVisible: false }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
