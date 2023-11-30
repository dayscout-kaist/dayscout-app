import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { Icon } from "@/icons";
import {
  align,
  bg,
  colors,
  fill,
  gap,
  margin,
  padding,
  round,
  row,
  text,
} from "@/styles";

export const OptionSelect: React.FC<{
  value: string | null;
  title?: string;
  placeholder?: string;
  onPress: () => void;
}> = ({ value, title, placeholder, onPress }) => (
  <View style={gap(6)}>
    {title && (
      <Text style={[margin.left(4), text.sub2, text.gray600]}>{title}</Text>
    )}
    <TouchableOpacity
      style={[
        row,
        align.center,
        gap(10),
        round.md,
        padding.vertical(18),
        padding.horizontal(16),
        bg.gray50,
      ]}
      onPress={onPress}
    >
      <Text style={[fill, text.btn1, !!value ? text.gray300 : text.gray600]}>
        {value ?? placeholder}
      </Text>
      <Icon.down_wide width={26} height={26} fill={colors.gray500} />
    </TouchableOpacity>
  </View>
);
