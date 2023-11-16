import React from "react";
import { type StyleProp, TextInput, type TextStyle } from "react-native";
import { bg, colors, padding, round, text } from "@/styles";

export const NumberInput: React.FC<{
  value: number | undefined;
  setValue: React.Dispatch<React.SetStateAction<number>>;
  placeholder?: string;
  style?: StyleProp<TextStyle>;
}> = ({ value, setValue, placeholder, style }) => (
  <TextInput
    value={value?.toString()}
    onChangeText={(text) => setValue(Number(text))}
    placeholder={placeholder}
    keyboardType="numeric"
    style={[round.lg, padding(12), bg.grayF2, text.body1, style]}
    returnKeyType="done"
    placeholderTextColor={colors.gray97}
  />
);
