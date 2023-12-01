import React from "react";
import { Text, View, ViewStyle } from "react-native";
import { Clickable } from "@/components/Clickable";
import { align, bg, fill, h, justify, round, text } from "@/styles";

interface Props {
  title: string;
  onPress?: () => void;
  style?: ViewStyle;
}

export const SmallButton: React.FC<Props> = ({ title, onPress, style }) => (
  <Clickable onPress={onPress} viewStyle={round.md} style={style}>
    <View style={[h(40), bg.primaryTransLight, justify.center, align.center]}>
      <Text style={[text.btn2, text.primary]}>{title}</Text>
    </View>
  </Clickable>
);
