import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const FoodAdd = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>FoodAdd Page</Text>
      <Button title="FoodAddDone" onPress={() => navigation.navigate('FoodAddDone')} />
    </View>
  );
};

export default FoodAdd;
