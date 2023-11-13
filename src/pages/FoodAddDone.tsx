import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const FoodAddDone = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>FoodAddDone Page</Text>
      <Button title="FoodCalculate" onPress={() => navigation.navigate('FoodCalculate')} />
    </View>
  );
};

export default FoodAddDone;
