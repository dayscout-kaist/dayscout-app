import React from "react";
import { Button, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const FoodCalculate: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>FoodCalculate Page</Text>
      <Button
        title="Search"
        onPress={() => navigation.navigate("HomeTab", { screen: "Search" })}
      />
      <Button
        title="Review"
        onPress={() => navigation.navigate("HomeTab", { screen: "Review" })}
      />
    </View>
  );
};
