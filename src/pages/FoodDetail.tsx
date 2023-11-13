import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const FoodDetail = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>FoodDetail Page</Text>
      <Button title="FoodError" onPress={() => navigation.navigate('FoodError')} />
      <Button title="FoodReview" onPress={() => navigation.navigate('FoodReview')} />
      <Button title="AddReview" onPress={() => navigation.navigate('AddReview')} />
      <Button title="FoodCalculate" onPress={() => navigation.navigate('FoodCalculate')} />
    </View>
  );
};

export default FoodDetail;
