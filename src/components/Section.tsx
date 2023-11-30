import React, { type PropsWithChildren } from "react";
import { View } from "react-native";
import { bg, inline, margin, padding, safe } from "@/styles";

export const Section: React.FC<PropsWithChildren> = ({ children }) => (
  <View style={[bg.white, inline, margin.bottom(12), padding.top(20)]}>
    {children}
  </View>
);
