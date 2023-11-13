import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Camera = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Camera Page</Text>
      <Button title="FoodAdd" onPress={() => navigation.navigate('FoodAdd')} />
      <Button title="Search" onPress={() => navigation.navigate('Search')} />
    </View>
  );
};

export default Camera;
