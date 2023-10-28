import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>홈</Text>
      <Button title="Explore" onPress={() => navigation.navigate('Explore')} />
    </View>
  );
};

export default Home;
