import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { HomeTab } from "@/navigation/HomeTab";
import type {
  AuthStackParamList,
  RootStackParamList,
} from "@/navigation/types";
import {
  AddReview,
  Camera,
  EditProfile,
  EmailPwd,
  FoodCalculate,
  FoodDetail,
  FoodReview,
  Greet,
  Help,
  Inbody,
  Landing,
  Nickname,
  Personal,
} from "@/screens";
import { colors } from "@/styles";
import { AppTheme } from "@/theme";

import { HeaderBackImage } from "./Header";

const AuthStack = createStackNavigator<AuthStackParamList>();
const Stack = createStackNavigator<RootStackParamList>();

export const RootStack: React.FC = () => {
  // TODO: Use real state after connecting to API
  const authState = { userToken: null };

  return (
    <NavigationContainer theme={AppTheme}>
      {authState.userToken === null ? (
        <AuthStack.Navigator
          screenOptions={{
            headerBackTitleVisible: false,
            headerBackImage: HeaderBackImage(colors.gray500),
            title: "",
          }}
        >
          <AuthStack.Screen
            name="Landing"
            component={Landing}
            options={{ headerShown: false }}
          />
          <AuthStack.Screen name="EmailPwd" component={EmailPwd} />
          <AuthStack.Screen name="Nickname" component={Nickname} />
          <AuthStack.Screen name="Inbody" component={Inbody} />
          <AuthStack.Screen name="Personal" component={Personal} />
          <AuthStack.Screen
            name="Greet"
            component={Greet}
            options={{ headerShown: false }}
          />
        </AuthStack.Navigator>
      ) : (
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
          <Stack.Screen name="Help" component={Help} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};
