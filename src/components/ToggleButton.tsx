import { bg, center, colors, padding, row, text } from "@/styles";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const ToggleButton: React.FC<{
  key1: string;
  key2: string;
  initVal?: string;
}> = ({ key1, key2, initVal }) => {
  const [val, setVal] = React.useState<string>(initVal ?? key1);

  return (
    <View style={[row]}>
      <TouchableOpacity
        onPress={() => setVal(key1)}
        style={[
          center,
          padding.vertical(12),
          styles.btn,
          val === key1 ? bg.grayF2 : bg.white,
          {
            borderRightWidth: 0,
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
            borderLeftColor: colors.grayF2,
          },
        ]}
      >
        <Text style={[text.body, val === key1 ? text.black : text.gray97]}>
          {key1}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setVal(key2)}
        style={[
          center,
          padding.vertical(12),
          styles.btn,
          val === key2 ? bg.grayF2 : bg.white,
          {
            borderLeftWidth: 0,
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
            borderRightColor: colors.grayF2,
          },
        ]}
      >
        <Text style={[text.body, val === key2 ? text.black : text.gray97]}>
          {key2}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    borderWidth: 1,
    borderTopColor: colors.grayF2,
    borderBottomColor: colors.grayF2,
    width: 50,
  },
});
