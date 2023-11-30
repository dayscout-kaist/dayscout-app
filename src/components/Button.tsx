import React from "react";
import {
  type GestureResponderEvent,
  TouchableOpacity,
  Text,
  ViewStyle,
  View,
  type StyleProp,
} from "react-native";
import { align, bg, padding, round, safe, text } from "@/styles";
import { Clickable } from "@/components/Clickable";

type Variant = "primary" | "secondary";
type Stick = "bottom" | "keyboard";

const getTheme = (style: Variant, disabled: boolean | undefined) => {
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
  variant: Variant;
  disabled?: boolean;
  stick?: Stick;
  style?: StyleProp<ViewStyle>;
}> = ({ title, onPress, variant, disabled, stick, style }) => {
  const theme = getTheme(variant, disabled);

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
    <Clickable
      style={[stick && stickStyle[stick], style]}
      viewStyle={stick !== "keyboard" && round.lg}
      noShrink={stick === "keyboard"}
      onPress={onPress}
      disabled={disabled}
    >
      <View
        style={[
          padding.horizontal(16),
          padding.vertical(20),
          theme.bg,
          align.center,
        ]}
      >
        <Text style={[text.btn1, theme.txt]}>{title}</Text>
      </View>
    </Clickable>
  );
};
