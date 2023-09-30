import React from "react";
import { Button, Text, View } from "react-native";
import type { RootStackScreenProps } from "@/navigation/types";

export const TextSearch: React.FC<RootStackScreenProps<"TextSearch">> = ({ navigation }) => {
  return (
    <View>
      <Text>TextSearch</Text>
      <Button
        title="Food Info"
        onPress={() => navigation.navigate("FoodInfo")}
      />
    </View>
  );
};
