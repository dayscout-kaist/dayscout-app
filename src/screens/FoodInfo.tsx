import React from "react";
import { Button, Text, View } from "react-native";
import type { RootStackScreenProps } from "@/navigation/types";

export const FoodInfo: React.FC<RootStackScreenProps<"FoodInfo">> = ({
  route: { params },
  navigation
}) => {
  return (
    <View>
      <Text>FoodInfo</Text>
      <Button
        title="SelectIntake"
        onPress={() => navigation.navigate("SelectIntake")}
      />
      <Text>{params.foodInfo.name}</Text>
    </View>
  );
};
