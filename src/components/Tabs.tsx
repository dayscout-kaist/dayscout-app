import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import {
  bg,
  center,
  colors,
  fill,
  h,
  padding,
  row,
  safe,
  text,
} from "@/styles";

export const Tabs = <T extends string>({
  tabs,
  selected,
  setSelected,
}: {
  tabs: readonly T[];
  selected: T;
  setSelected: React.Dispatch<React.SetStateAction<T>>;
}): React.ReactNode => (
  <View
    style={[
      row,
      h(48),
      padding.horizontal(safe.horizontal),
      bg.white,
      { borderBottomWidth: 1, borderBottomColor: colors.gray50 },
    ]}
  >
    {tabs.map(tab => (
      <TouchableOpacity
        key={tab}
        style={[
          fill,
          center,
          padding.horizontal(12),
          tab === selected
            ? { borderBottomWidth: 2, borderBottomColor: colors.gray600 }
            : {},
        ]}
        onPress={() => setSelected(tab)}
      >
        <Text
          style={[text.sub2, tab === selected ? text.gray600 : text.gray300]}
        >
          {tab}
        </Text>
      </TouchableOpacity>
    ))}
  </View>
);
