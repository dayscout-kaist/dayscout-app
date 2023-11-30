import React from "react";
import {
  type GestureResponderEvent,
  TouchableOpacity,
  Text,
  ViewStyle,
} from "react-native";
import { align, bg, padding, round, safe, text } from "@/styles";

type Style = "primary" | "secondary";
type Stick = "bottom" | "keyboard";

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

export const Button: React.FC<{
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  style: Style;
  disabled?: boolean;
  stick?: Stick;
}> = ({ title, onPress, style, disabled, stick }) => {
  const theme = getTheme(style, disabled);

  const stickStyle = {
    bottom: {
      position: "absolute",
      bottom: safe.bottom,
      left: safe.horizontal,
      right: safe.horizontal,
    },
    keyboard: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      borderRadius: 0,
    },
  } as const satisfies Record<Stick, ViewStyle>;

  return (
    <TouchableOpacity
      style={[
        round.lg,
        padding.horizontal(16),
        padding.vertical(20),
        align.center,
        theme.bg,
        stick ? stickStyle[stick] : {},
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={[text.btn1, theme.txt]}>{title}</Text>
    </TouchableOpacity>
  );
};
