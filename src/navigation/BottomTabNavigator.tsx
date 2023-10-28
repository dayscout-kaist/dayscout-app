// src/navigation/BottomTabNavigator.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/Home';
import Explore from '../pages/Explore';
import Archive from '../pages/Archive';
import Setting from '../pages/Setting';
import FoodInfo from '../pages/FoodInfo';
import SelectInTake from '../pages/SelectInTake';

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const ExploreStack = createStackNavigator();
const ArchiveStack = createStackNavigator();
const SettingStack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
  );
};

const ExploreStackNavigator = () => {
  return (
    <ExploreStack.Navigator>
      <ExploreStack.Screen name="Explore" component={Explore} />
      <ExploreStack.Screen name="FoodInfo" component={FoodInfo} />
      <ExploreStack.Screen name="SelectInTake" component={SelectInTake} />
    </ExploreStack.Navigator>
  );
};

const ArchiveStackNavigator = () => {
  return (
    <ArchiveStack.Navigator>
      <ArchiveStack.Screen name="Archive" component={Archive} />
    </ArchiveStack.Navigator>
  );
};

const SettingStackNavigator = () => {
  return (
    <SettingStack.Navigator>
      <SettingStack.Screen name="Setting" component={Setting} />
    </SettingStack.Navigator>
  );
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen options={{headerShown: false}} name="HomeStack" component={HomeStackNavigator} />
      <Tab.Screen options={{headerShown: false}} name="ExploreStack" component={ExploreStackNavigator} />
      <Tab.Screen options={{headerShown: false}} name="ArchiveStack" component={ArchiveStackNavigator} />
      <Tab.Screen options={{headerShown: false}} name="SettingStack" component={SettingStackNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
