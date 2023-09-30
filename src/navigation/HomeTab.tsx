import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import type { HomeTabParamList } from "@/navigation/types";
import { Home, Settings } from "@/screens";

const Tab = createBottomTabNavigator<HomeTabParamList>();

export const HomeTab: React.FC = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={Home}/>
    <Tab.Screen name="Settings" component={Settings}/>
  </Tab.Navigator>
);
