import React from "react";
import { ImageBackground, Text, View } from "react-native";

import {
  align,
  bg,
  column,
  fill,
  gap,
  h,
  padding,
  round,
  row,
  text,
  w,
} from "@/styles";
import type { TagInfo } from "@/types/food";

import { Clickable } from "./Clickable";
import { Tag } from "./Tag";

interface Props {
  onPress?: () => void;
  imageSrc: string;
  tags: TagInfo[];
  name: string;
  category: string;
}

export const FoodSearchItem: React.FC<Props> = ({
  onPress,
  imageSrc,
  tags,
  name,
  category,
}) => (
  <Clickable onPress={onPress} viewStyle={round.lg}>
    <View style={[row, gap(12), align.center, padding(12)]}>
      <View
        style={[
          h(56),
          w(56),
          round.md,
          padding(5),
          bg.gray50,
          { overflow: "hidden" },
        ]}
      >
        <ImageBackground source={{ uri: imageSrc }} style={bg.white}>
          <View
            style={[h("fill"), { backgroundColor: "rgba(0, 0, 0, 0.04)" }]}
          ></View>
        </ImageBackground>
      </View>
      <View style={[column, gap(6), fill]}>
        <View style={[row, gap(8)]}>
          {tags.map(tag => (
            <Tag
              key={tag.id}
              name={tag.name}
              color={tag.colorBorder}
              bgColor={tag.colorBackground}
            />
          ))}
        </View>
        <View style={[row, gap(8), { alignItems: "center" }]}>
          <Text
            style={[text.sub2, text.gray600, { flexShrink: 1 }]}
            numberOfLines={1}
          >
            {name}
          </Text>
          <Text
            style={[text.body2, text.gray300, { flexShrink: 0 }]}
            numberOfLines={1}
          >
            {category}
          </Text>
        </View>
      </View>
    </View>
  </Clickable>
);
