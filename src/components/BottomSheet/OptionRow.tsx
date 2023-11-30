import React from "react";
import {
  type GestureResponderEvent,
  Text,
  TouchableOpacity,
} from "react-native";

import { Icon } from "@/icons";
import { align, colors, fill, row, text } from "@/styles";

export const OptionRow: React.FC<{
  value: string;
  onPress: (event: GestureResponderEvent) => void;
  selected?: boolean;
  disabled?: boolean;
}> = ({ value, onPress, selected = false, disabled = false }) => (
  <TouchableOpacity
    style={[row, align.center, { height: 60 }]}
    onPress={onPress}
    disabled={disabled}
  >
    <Text style={[fill, text.body1, disabled ? text.gray300 : text.gray500]}>
      {value}
    </Text>
    {selected && <Icon.check width={24} height={24} fill={colors.primary} />}
  </TouchableOpacity>
);
