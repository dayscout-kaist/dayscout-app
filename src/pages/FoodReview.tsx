import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const FoodReview = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>FoodReview Page</Text>
      <Button title="AddReview" onPress={() => navigation.navigate('AddReview')} />
    </View>
  );
};

export default FoodReview;
