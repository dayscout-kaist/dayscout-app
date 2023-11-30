import React, { type PropsWithChildren } from "react";
import { View } from "react-native";
import { bg, fill } from "@/styles";

export const ScreenBackground: React.FC<PropsWithChildren> = ({ children }) => {
  return <View style={[bg.gray50, fill]}>{children}</View>;
};
