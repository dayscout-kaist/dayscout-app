import React from "react";
import { type ColorValue, Text, View } from "react-native";

import { center, colors, h, padding, round, text } from "@/styles";

export const Tag: React.FC<{
  name: string;
  color?: string;
  bgColor?: string;
}> = ({ name, color = colors.gray100, bgColor = colors.gray500 }) => (
  <View
    style={[
      center,
      round.sm,
      padding.horizontal(8),
      h(26),
      { backgroundColor: bgColor },
    ]}
  >
    <Text style={[text.body2, { color }]}>{name}</Text>
  </View>
);
