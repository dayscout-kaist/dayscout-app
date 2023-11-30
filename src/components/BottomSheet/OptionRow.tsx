import React from "react";
import {
  type GestureResponderEvent,
  Text,
  TouchableOpacity,
} from "react-native";

import { Icon } from "@/icons";
import {
  align,
  colors,
  fill,
  margin,
  padding,
  round,
  row,
  text,
} from "@/styles";
import { Clickable } from "@/components";

export const OptionRow: React.FC<{
  value: string;
  onPress: (event: GestureResponderEvent) => void;
  selected?: boolean;
  disabled?: boolean;
}> = ({ value, onPress, selected = false, disabled = false }) => (
  <Clickable
    viewStyle={[
      row,
      align.center,
      { height: 60 },
      margin.horizontal(-12),
      padding.horizontal(12),
      round.md,
    ]}
    onPress={onPress}
    disabled={disabled}
  >
    <Text style={[fill, text.body1, disabled ? text.gray300 : text.gray500]}>
      {value}
    </Text>
    {selected && <Icon.check width={24} height={24} fill={colors.primary} />}
  </Clickable>
);
