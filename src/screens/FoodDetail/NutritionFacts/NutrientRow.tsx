import React from "react";
import { Text, View } from "react-native";

import { justify, row, text } from "@/styles";

export const NutrientRow: React.FC<{
  name: string;
  value: number | undefined;
}> = ({ name, value }) => (
  <View style={[row, justify.between]}>
    <Text style={[text.body1, text.gray400]}>{name}</Text>
    <Text style={[text.body1, text.gray600]}>{value ?? "?"}g</Text>
  </View>
);
