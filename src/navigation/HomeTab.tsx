import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import type { HomeTabParamList } from "@/navigation/types";
import { Home, Review, Search, Settings } from "@/screens";
import { colors } from "@/styles";

const Tab = createBottomTabNavigator<HomeTabParamList>();

const TabIcon =
  (name: string): React.FC<{ focused: boolean; color: string; size: number }> =>
  ({ focused, size }) =>
    (
      <Icon
        name={name}
        size={size}
        color={focused ? colors.primary : colors.gray400}
      />
    );

export const HomeTab: React.FC = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarShowLabel: false,
        tabBarIcon: TabIcon("home"),
      }}
    />
    <Tab.Screen
      name="Search"
      component={Search}
      options={{
        tabBarShowLabel: false,
        tabBarIcon: TabIcon("search"),
      }}
    />
    <Tab.Screen
      name="Review"
      component={Review}
      options={{
        tabBarShowLabel: false,
        tabBarIcon: TabIcon("pricetags"),
      }}
    />
    <Tab.Screen
      name="Settings"
      component={Settings}
      options={{
        tabBarShowLabel: false,
        tabBarIcon: TabIcon("settings"),
      }}
    />
  </Tab.Navigator>
);
