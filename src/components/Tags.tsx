import React from "react";
import type { FoodType, TagInfo } from "@/types/food";
import { colors, gap, row } from "@/styles";
import { Tag } from "@/components/Tag";
import { View } from "react-native";

interface Props {
  tags: TagInfo[];
  type: FoodType;
}

export const Tags: React.FC<Props> = ({ tags, type }) => (
  <View style={[row, gap(8)]}>
    {type === "distribution" ? <Tag.Distribution /> : <Tag.General />}
    {tags.map(tag => (
      <Tag
        key={tag.id}
        name={tag.name}
        color={tag.colorBackground || colors.gray400}
      />
    ))}
  </View>
);
