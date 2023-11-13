// src/pages/FoodInfo.tsx
import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AddReview = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Food Info Page</Text>
      <Button title="Review" onPress={() => navigation.navigate('Review')} />
    </View>
  );
};

export default AddReview;
