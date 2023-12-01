import React from "react";
import { Animated, Text, View } from "react-native";

import { Icon } from "@/icons";
import {
  align,
  center,
  colors,
  gap,
  w,
  h,
  justify,
  padding,
  round,
  row,
  text,
  bg,
  column,
  margin,
} from "@/styles";
import { TossFace } from "@/utils/TossFace";

import { Clickable } from "./Clickable";

export const ActionBox: React.FC<{
  icon: string;
  main: string;
  desc: string;
  onPress: () => void;
}> = ({ icon, main, desc, onPress }) => {
  return (
    <View
      style={[
        padding.vertical(10),
        padding.horizontal(12),
        margin.horizontal(-24),
      ]}
    >
      <Clickable onPress={onPress} viewStyle={round.md}>
        <Animated.View
          style={[
            row,
            justify.between,
            align.center,
            h(74),
            padding.horizontal(12),
          ]}
        >
          <View style={[row, align.center, gap(20)]}>
            <Animated.View
              style={[center, round.full, w(54), h(54), bg.gray50]}
            >
              <TossFace icon={icon} size={36} />
            </Animated.View>
            <View style={[column, gap(2)]}>
              <Text style={[text.body2, text.gray300]}>{main}</Text>
              <Text style={[text.sub2, text.gray600]}>{desc}</Text>
            </View>
          </View>
          <Icon.right width={30} height={30} fill={colors.gray400} />
        </Animated.View>
      </Clickable>
    </View>
  );
};
