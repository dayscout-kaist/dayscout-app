import React from "react";
import { Button, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const Camera: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Camera Page</Text>
      <Button
        title="Search"
        onPress={() => navigation.navigate("HomeTab", { screen: "Search" })}
      />
    </View>
  );
};
