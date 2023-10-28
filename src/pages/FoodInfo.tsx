// src/pages/FoodInfo.tsx
import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const FoodInfo = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Food Info Page</Text>
      <Button title="Archive" onPress={() => navigation.navigate('Archive')} />
      <Button title="SelectInTake" onPress={() => navigation.navigate('SelectInTake')} />
    </View>
  );
};

export default FoodInfo;
