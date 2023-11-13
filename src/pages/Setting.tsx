import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Setting = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>설정</Text>
      <Button title="EditProfile" onPress={() => navigation.navigate('EditProfile')} />
    </View>
  );
};

export default Setting;
