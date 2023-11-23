import React from "react";
import { Button, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const Home: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home</Text>
      <Button
        title="Search"
        onPress={() => navigation.navigate("HomeTab", { screen: "Search" })}
      />
      <Button title="Camera" onPress={() => navigation.navigate("Camera")} />
    </View>
  );
};