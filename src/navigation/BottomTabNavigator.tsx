// src/navigation/BottomTabNavigator.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/Home';
import Search from '../pages/Search';
import Review from '../pages/Review';
import Setting from '../pages/Setting';
import AddReview from '@/pages/AddReview';
import Camera from '@/pages/Camera';
import FoodDetail from '@/pages/FoodDetail';
import FoodError from '@/pages/FoodError';
import EditProfile from '@/pages/EditProfile';
import FoodAdd from '@/pages/FoodAdd';
import FoodReview from '@/pages/FoodReview';
import FoodAddDone from '@/pages/FoodAddDone';
import FoodCalculate from '@/pages/FoodCalculate';

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
            <Tab.Screen name="Search" component={Search} />
            <Tab.Screen name="Review" component={Review} />
            <Tab.Screen name="Setting" component={Setting} />
          </Tab.Navigator>
        )} 
      />
      <Stack.Screen name="Camera" component={Camera} />
      <Stack.Screen name="FoodDetail" component={FoodDetail} />
      <Stack.Screen name="FoodError" component={FoodError} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="FoodAdd" component={FoodAdd} />
      <Stack.Screen name="FoodReview" component={FoodReview} />
      <Stack.Screen name="FoodAddDone" component={FoodAddDone} />
      <Stack.Screen name="AddReview" component={AddReview} />
      <Stack.Screen name="FoodCalculate" component={FoodCalculate} />

    </Stack.Navigator>
  );
};

export default BottomTabNavigator;
