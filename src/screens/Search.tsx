import React from "react";
import { Button, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const Search: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Search</Text>
      <Button
        title="FoodDetail"
        onPress={() => navigation.navigate("FoodDetail")}
      />
    </View>
  );
};
