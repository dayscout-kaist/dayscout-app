import React from "react";
import { type StyleProp, Text, type TextStyle, Platform } from "react-native";

export const TossFace: React.FC<{
  icon: string;
  style?: StyleProp<TextStyle>;
}> = ({ icon, style }) => (
  <Text
    style={[
      // Emojis are displayed a bit above the text font <https://github.com/toss/tossface/issues/17>
      {
        marginBottom: Platform.OS === "android" ? -10 : 0,
        fontFamily: "TossFace",
      },
      style,
    ]}
  >
    {icon}
  </Text>
);
