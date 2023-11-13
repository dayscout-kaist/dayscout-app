import React from "react";
import { Button, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const Review: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Review</Text>
      <Button
        title="AddReview"
        onPress={() => navigation.navigate("AddReview")}
      />
    </View>
  );
};
