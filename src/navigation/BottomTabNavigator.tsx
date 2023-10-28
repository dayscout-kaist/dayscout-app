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
import AddArchive from '../pages/AddArchive';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="BottomTabs" 
        options={{ headerShown: false }} 
        children={() => (
          <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Explore" component={Explore} />
            <Tab.Screen name="Archive" component={Archive} />
            <Tab.Screen name="Setting" component={Setting} />
          </Tab.Navigator>
        )} 
      />
      <Stack.Screen name="FoodInfo" component={FoodInfo} />
      <Stack.Screen name="SelectInTake" component={SelectInTake} />
      <Stack.Screen name="AddArchive" component={AddArchive} />
    </Stack.Navigator>
  );
};

export default BottomTabNavigator;
