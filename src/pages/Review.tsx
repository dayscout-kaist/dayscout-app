import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Review = () => {
  const navigation = useNavigation();
  
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>기록</Text>
      <Button title="AddReview" onPress={() => navigation.navigate('AddReview')} />
    </View>
  );
};

export default Review;
