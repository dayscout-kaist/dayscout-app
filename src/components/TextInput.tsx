import React, { useState } from "react";
import {
  type TextInputProps,
  TextInput as TxtInput,
  View,
  Text,
} from "react-native";

import {
  align,
  bg,
  fill,
  gap,
  margin,
  padding,
  round,
  row,
  text,
} from "@/styles";

export const TextInput: React.FC<{
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  isValid: (value: string) => { valid: true } | { valid: false; msg: string };
  title?: string;
  unit?: string;
  options?: TextInputProps;
}> = ({ value, setValue, isValid, title, unit, options }) => {
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  return (
    <View style={[gap(6)]}>
      {title && (
        <Text style={[margin.left(4), text.sub2, text.gray600]}>{title}</Text>
      )}
      <View
        style={[
          row,
          align.center,
          gap(10),
          round.md,
          padding.vertical(18),
          padding.horizontal(16),
          bg.gray50,
        ]}
      >
        <TxtInput
          style={[fill, text.btn1, text.gray600]}
          value={value}
          onChangeText={text => {
            const check = isValid(text);
            if (check.valid) setErrorMsg(null);
            else setErrorMsg(check.msg);
            setValue(text);
          }}
          {...options}
        />
        {unit && <Text style={[text.btn1, text.gray600]}>{unit}</Text>}
      </View>
      {value && errorMsg !== null && (
        <Text style={[margin.left(8), text.body2, text.red400]}>
          {errorMsg}
        </Text>
      )}
    </View>
  );
};
