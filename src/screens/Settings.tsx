import React from "react";
import { Button, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const Settings: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings</Text>
      <Button
        title="EditProfile"
        onPress={() => navigation.navigate("EditProfile")}
      />
    </View>
  );
};
