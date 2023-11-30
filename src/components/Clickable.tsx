import React from "react";
import type { StyleProp, ViewStyle } from "react-native";

import { Motion } from "@legendapp/motion";

import { bg, springMotion } from "@/styles";

interface Props extends React.ComponentProps<typeof Motion.Pressable> {
  children: React.ReactNode;
  viewStyle?: StyleProp<ViewStyle>;
  initialBg?: ViewStyle;
  whileTapBg?: ViewStyle;
}

export const Clickable: React.FC<Props> = ({
  children,
  viewStyle,
  initialBg,
  whileTapBg,
  ...props
}) => (
  <Motion.Pressable {...props}>
    <Motion.View
      style={viewStyle}
      initial={initialBg || bg.white}
      whileTap={whileTapBg || bg.gray50}
      {...springMotion}
    >
      <Motion.View whileTap={{ scale: 0.95 }} {...springMotion}>
        {children}
      </Motion.View>
    </Motion.View>
  </Motion.Pressable>
);
