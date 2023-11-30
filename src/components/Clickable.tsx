import React from "react";
import { Motion } from "@legendapp/motion";
import { bg, springMotion } from "@/styles";
import type { StyleProp, ViewStyle } from "react-native";

interface Props extends React.ComponentProps<typeof Motion.Pressable> {
  children: React.ReactNode;
  viewStyle?: StyleProp<ViewStyle>;
}

export const Clickable: React.FC<Props> = ({
  children,
  viewStyle,
  ...props
}) => (
  <Motion.Pressable {...props}>
    <Motion.View
      style={viewStyle}
      initial={bg.white}
      whileTap={bg.gray50}
      {...springMotion}
    >
      <Motion.View whileTap={{ scale: 0.95 }} {...springMotion}>
        {children}
      </Motion.View>
    </Motion.View>
  </Motion.Pressable>
);
