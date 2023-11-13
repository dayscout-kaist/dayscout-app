import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Search = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>탐색</Text>
      <Button title="FoodAdd" onPress={() => navigation.navigate('FoodAdd')} />
      <Button title="FoodDetail" onPress={() => navigation.navigate('FoodDetail')} />
    </View>
  );
};

export default Search;
