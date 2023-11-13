import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const FoodError = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>FoodDetail Page</Text>
      <Button title="FoodDetail" onPress={() => navigation.navigate('FoodDetail')} />
    </View>
  );
};

export default FoodError;
