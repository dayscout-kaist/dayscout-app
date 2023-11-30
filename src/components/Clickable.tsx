import React from "react";
import type { StyleProp, ViewStyle } from "react-native";

import { Motion } from "@legendapp/motion";

import { bg, springMotion } from "@/styles";

interface Props extends React.ComponentProps<typeof Motion.Pressable> {
  children: React.ReactNode;
  viewStyle?: StyleProp<ViewStyle>;
  noShrink?: boolean;
}

export const Clickable: React.FC<Props> = ({
  children,
  viewStyle,
  noShrink,
  ...props
}) => (
  <Motion.Pressable {...props}>
    <Motion.View
      style={[{ overflow: "hidden" }, viewStyle]}
      whileTap={{ scale: noShrink ? 1 : 0.95 }}
      {...springMotion}
    >
      {children}
      <Motion.View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "100%",
          backgroundColor: "#000",
        }}
        initial={{ opacity: 0 }}
        whileTap={{ opacity: 0.05 }}
        {...springMotion}
      />
    </Motion.View>
  </Motion.Pressable>
);
