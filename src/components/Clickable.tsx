import React from "react";
import { Motion } from "@legendapp/motion";
import { bg, round, springMotion } from "@/styles";

interface Props extends React.ComponentProps<typeof Motion.Pressable> {
  children: React.ReactNode;
}

export const Clickable: React.FC<Props> = ({ children, ...props }) => (
  <Motion.Pressable {...props}>
    <Motion.View
      style={[round.md]}
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
