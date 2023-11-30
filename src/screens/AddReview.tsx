import React from "react";
import { Button, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const AddReview: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>AddReview Page</Text>
      <Button
        title="Review"
        onPress={() => navigation.navigate("HomeTab", { screen: "Posts" })}
      />
    </View>
  );
};
