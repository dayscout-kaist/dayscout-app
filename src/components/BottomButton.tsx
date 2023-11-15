import React from "react";
import {
  type GestureResponderEvent,
  TouchableOpacity,
  Text,
} from "react-native";
import { align, bg, padding, round, safe, text } from "@/styles";

type Style = "primary" | "secondary";

const getTheme = (style: Style, disabled: boolean | undefined) => {
  switch (style) {
    case "primary":
      return disabled
        ? { bg: bg.primaryTrans, txt: text.white }
        : { bg: bg.primary, txt: text.white };
    case "secondary":
      return disabled
        ? { bg: bg.gray100, txt: text.gray300 }
        : { bg: bg.gray100, txt: text.gray500 };
  }
};

export const BottomButton: React.FC<{
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  style: Style;
  disabled?: boolean;
}> = ({ title, onPress, style, disabled }) => {
  const theme = getTheme(style, disabled);

  return (
    <TouchableOpacity
      style={[
        round.xl,
        padding.horizontal(16),
        padding.vertical(20),
        align.center,
        theme.bg,
        {
          position: "absolute",
          bottom: safe.bottom,
          left: safe.horizontal,
          right: safe.horizontal,
        },
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={[text.button, theme.txt]}>{title}</Text>
    </TouchableOpacity>
  );
};
