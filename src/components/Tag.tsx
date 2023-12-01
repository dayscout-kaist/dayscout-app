import React from "react";
import { Text, View } from "react-native";

import { center, h, padding, round, text } from "@/styles";

const TagComponent: React.FC<{
  name: string;
  color: string;
}> = ({ name, color }) => (
  <View
    style={[
      center,
      round.sm,
      padding.horizontal(8),
      h(26),
      { backgroundColor: `${color}33` },
    ]}
  >
    <Text style={[text.body2, { color }]}>{name}</Text>
  </View>
);

const Distribution = () => <TagComponent name="유통 식품" color="#A40FFF" />;
const General = () => <TagComponent name="추정치" color="#FF980F" />;

export const Tag = Object.assign(TagComponent, { General, Distribution });
