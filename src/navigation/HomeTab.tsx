import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { IconButton } from "@/components";
import { Icon, type IconType } from "@/icons";
import type { HomeTabParamList } from "@/navigation/types";
import { Home, Posts, Search, Settings } from "@/screens";
import { bg, colors, padding, text } from "@/styles";

const Tab = createBottomTabNavigator<HomeTabParamList>();

const TabIcon =
  (
    name: IconType,
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
        headerStyle: {
          height: 46,
        },
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
        tabBarHideOnKeyboard: true,
        headerTitleAlign: "center",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: "홈",
          tabBarIcon: TabIcon("home"),
          headerTitle: () => <Icon.logo height={36} width={163} />,
          headerTitleAlign: "left",
          headerTitleContainerStyle: padding.horizontal(8),
          headerShown: true,
          headerStyle: bg.gray50,
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          title: "검색",
          tabBarIcon: TabIcon("search"),
          unmountOnBlur: true,
        }}
      />
      <Tab.Screen
        name="Posts"
        component={Posts}
        options={{
          title: "포스트",
          headerShown: true,
          headerStyle: [{ opacity: 1, borderBottomWidth: 0 }],
          tabBarIcon: TabIcon("sticker"),
          headerRight: () => (
            <IconButton
              onPress={navigation => navigation.navigate("AddReview")}
            />
          ),
          headerRightContainerStyle: padding.right(16),
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
