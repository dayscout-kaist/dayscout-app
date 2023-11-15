import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import type { HomeTabParamList } from "@/navigation/types";
import { Home, Review, Search, Settings } from "@/screens";
import { colors, text } from "@/styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Icon, type IconType } from "./icons";
const Tab = createBottomTabNavigator<HomeTabParamList>();

const TabIcon =
  (
    name: IconType
  ): React.FC<{ focused: boolean; color: string; size: number }> =>
  ({ color }) => {
    const Ic = Icon[name];
    return <Ic width={30} height={30} fill={color} />;
  };

export const HomeTab: React.FC = () => {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.gray200,
        tabBarStyle: {
          position: "absolute",
          height: 60 + insets.bottom,
          paddingHorizontal: 10,
        },
        tabBarItemStyle: {
          gap: 2,
          margin: 0,
          padding: 0,
        },
        tabBarIconStyle: {
          marginTop: 8,
        },
        tabBarLabelStyle: {
          ...text.bottomNav,
          marginBottom: 8,
          paddingTop: 2,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: "홈",
          tabBarIcon: TabIcon("home"),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          title: "검색",
          tabBarIcon: TabIcon("search"),
        }}
      />
      <Tab.Screen
        name="Review"
        component={Review}
        options={{
          title: "포스트",
          tabBarIcon: TabIcon("sticker"),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          title: "정보",
          tabBarIcon: TabIcon("user"),
        }}
      />
    </Tab.Navigator>
  );
};
