import React from "react";
import { type StyleProp, TextInput, type TextStyle } from "react-native";
import { bg, colors, padding, round, text } from "@/styles";

export const NumberInput: React.FC<{
  placeholder?: string;
  initVal?: number;
  style?: StyleProp<TextStyle>;
}> = ({ placeholder, initVal, style }) => {
  const [val, setVal] = React.useState<string>(initVal?.toString() ?? "");

  return (
    <TextInput
      value={val}
      onChangeText={setVal}
      placeholder={placeholder}
      keyboardType="numeric"
      style={[round.lg, padding(12), bg.grayF2, text.body, style]}
      placeholderTextColor={colors.gray97}
    />
  );
};
