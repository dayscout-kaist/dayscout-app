import React from "react";
import { Button, Text, View } from "react-native";
import type { RootStackScreenProps } from "@/navigation/types";

export const ImageSearch: React.FC<RootStackScreenProps<"ImageSearch">> = ({navigation}) => {
  return (
    <View>
      <Text>ImageSearch</Text>
      <Button title="Food Info" onPress={() => navigation.navigate("FoodInfo")}/>
    </View>
  );
};
