import React from "react";
import { type ColorValue, Text, View } from "react-native";

import { center, padding, round, text } from "@/styles";

export const Tag: React.FC<{
  bgClr: ColorValue;
  txtClr: ColorValue;
  children: string;
}> = ({ bgClr, txtClr, children }) => (
  <View
    style={[
      center,
      round.sm,
      padding.horizontal(8),
      { height: 26, backgroundColor: bgClr },
    ]}
  >
    <Text style={[text.body2, { color: txtClr }]}>{children}</Text>
  </View>
);
