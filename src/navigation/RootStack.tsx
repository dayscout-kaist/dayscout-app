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
      <Stack.Screen
        name="ImageSearch"
        component={ImageSearch}
        options={{ title: "이미지로 검색", headerBackTitleVisible: false }}
      />
      <Stack.Screen
        name="TextSearch"
        component={TextSearch}
        options={{ title: "텍스트로 검색", headerBackTitleVisible: false }}
      />
      <Stack.Screen
        name="FoodInfo"
        component={FoodInfo}
        options={{ title: "음식 영양정보", headerBackTitleVisible: false }}
      />
      <Stack.Screen
        name="SelectIntake"
        component={SelectIntake}
        options={{ title: "섭취량 입력", headerBackTitleVisible: false }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
