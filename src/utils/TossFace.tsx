import React from "react";
import { type StyleProp, Text, type TextStyle, Platform } from "react-native";

export const TossFace: React.FC<{
  icon: string;
  size?: number;
  style?: StyleProp<TextStyle>;
}> = ({ icon, size = 24, style }) => (
  <Text
    style={[
      // Emojis are displayed a bit above the text font <https://github.com/toss/tossface/issues/17>
      {
        textAlignVertical: "center",
        marginBottom: Platform.select({ android: -0.35 * size }),
        fontFamily: "TossFace",
        fontSize: size,
        height: Platform.select({ android: size * 1.3 }),
      },
      style,
    ]}
  >
    {icon}
  </Text>
);
