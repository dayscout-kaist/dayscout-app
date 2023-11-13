import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const FoodCalculate = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>FoodCalculate Page</Text>
      <Button title="Search" onPress={() => navigation.navigate('Search')} />
      <Button title="Review" onPress={() => navigation.navigate('Review')} />
    </View>
  );
};

export default FoodCalculate;
