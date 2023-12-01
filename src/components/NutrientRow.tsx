import React from "react";
import { Text, View } from "react-native";

import {
  align,
  bg,
  gap,
  h,
  justify,
  margin,
  padding,
  round,
  row,
  text,
} from "@/styles";
import { Icon } from "@/icons";

export const NutrientRow: React.FC<{
  name: string;
  value: number | undefined;
  suggestion?: number;
  sub?: boolean;
  hideInfo?: boolean;
}> = ({ name, value, suggestion, sub, hideInfo }) => (
  <View>
    <View style={[row, justify.between, sub && margin.top(-6)]}>
      <Text style={[text.body1, text.gray400]}>
        {sub && <Text style={text.gray200}>└&nbsp;&nbsp;</Text>}
        {name}
      </Text>
      <Text style={[text.body1, suggestion ? text.gray300 : text.gray600]}>
        {value !== undefined
          ? `${parseFloat(value.toFixed(2))} g`
          : "정보 없음"}
        {suggestion && " → "}
        {suggestion && <Text style={text.warning}>{suggestion}g</Text>}
      </Text>
    </View>
    {!hideInfo && suggestion && (
      <View
        style={[
          row,
          h(38),
          bg.warningTrans,
          round.md,
          align.center,
          margin.top(4),
          margin.bottom(0),
          padding.horizontal(12),
          gap(6),
        ]}
      >
        <Icon.warning />
        <Text style={[text.body2, text.warning]}>
          정확하지 않은 정보일 수 있어요
        </Text>
      </View>
    )}
  </View>
);
