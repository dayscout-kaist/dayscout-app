import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const EditProfile = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>EditProfile Page</Text>
      {/* <Button title="Archive" onPress={() => navigation.navigate('Archive')} /> */}
    </View>
  );
};

export default EditProfile;
