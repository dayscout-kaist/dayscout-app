import React from "react";
import {
  type GestureResponderEvent,
  TouchableOpacity,
  Text,
} from "react-native";
import { align, bg, padding, round, safe, text } from "@/styles";

export const BottomButton: React.FC<{
  title: string;
  onPress: (event: GestureResponderEvent) => void;
}> = ({ title, onPress }) => (
  <TouchableOpacity
    style={[
      round.lg,
      padding.horizontal(20),
      padding.vertical(20),
      bg.primary,
      align.center,
      {
        position: "absolute",
        bottom: safe.bottom,
        left: safe.horizontal,
        right: safe.horizontal,
      },
    ]}
    onPress={onPress}
  >
    <Text style={text.body}>{title}</Text>
  </TouchableOpacity>
);
