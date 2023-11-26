import React from "react";
import { type ColorValue, Text, View } from "react-native";

import { center, h, padding, round, text } from "@/styles";

export type TagTitle =
  | "추정치"
  | "유통 식품"
  | "혈당 스파이크"
  | "혈당이 뒤늦게 오름"
  | "혈당 변화가 거의 없음"
  | "혈당이 잘 잡히는 음식";

// TODO : fill in colors
const tagPalette: Record<TagTitle, { bg: ColorValue; text: ColorValue }> = {
  "추정치": { bg: "#ffe5c3", text: "#ff980f" },
  "유통 식품": { bg: "#F2F2F2", text: "#828282" },
  "혈당 스파이크": { bg: "#fdbec1", text: "#eb2a2a" },
  "혈당이 뒤늦게 오름": { bg: "#FFE6D5", text: "#FF8A00" },
  "혈당 변화가 거의 없음": { bg: "#FFF2D5", text: "#FFC700" },
  "혈당이 잘 잡히는 음식": { bg: "#D5FFD5", text: "#00A600" },
};

export const Tag: React.FC<{
  title: TagTitle;
}> = ({ title }) => (
  <View
    style={[
      center,
      round.sm,
      padding.horizontal(8),
      h(26),
      { backgroundColor: tagPalette[title].bg },
    ]}
  >
    <Text style={[text.body2, { color: tagPalette[title].text }]}>{title}</Text>
  </View>
);
