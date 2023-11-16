import React from "react";
import { Text, TextInput, View } from "react-native";
import {
  bg,
  colors,
  fill,
  gap,
  justify,
  padding,
  round,
  row,
  text,
} from "@/styles";

export const NumberInputWithUnit: React.FC<{
  value: number | undefined;
  setValue: React.Dispatch<React.SetStateAction<number | undefined>>;
  unit: string;
  placeholder?: string;
}> = ({ value, setValue, unit, placeholder }) => (
  <View
    style={[row, justify.between, gap(8), round.lg, padding(12), bg.grayF2]}
  >
    <TextInput
      value={value?.toString()}
      onChangeText={(text) => setValue(Number(text))}
      placeholder={placeholder}
      keyboardType="numeric"
      style={[fill, text.body1]}
      placeholderTextColor={colors.gray97}
      returnKeyType="done"
    />
    <Text style={[text.body1, text.gray97]}>{unit}</Text>
  </View>
);
