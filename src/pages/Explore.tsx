import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Explore = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>탐색</Text>
      <Button title="FoodInfo" onPress={() => navigation.navigate('FoodInfo')} />
    </View>
  );
};

export default Explore;
