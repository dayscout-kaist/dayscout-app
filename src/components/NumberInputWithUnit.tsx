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
  unit: string;
  placeholder?: string;
  initVal?: number;
}> = ({ unit, placeholder, initVal }) => {
  const [val, setVal] = React.useState<string>(initVal?.toString() ?? "");

  return (
    <View
      style={[row, justify.between, gap(8), round.lg, padding(12), bg.grayF2]}
    >
      <TextInput
        value={val}
        onChangeText={setVal}
        placeholder={placeholder}
        keyboardType="numeric"
        style={[fill, text.body]}
        placeholderTextColor={colors.gray97}
      />
      <Text style={[text.body, text.gray97]}>{unit}</Text>
    </View>
  );
};
