import React from "react";
import {
  type ColorValue,
  Image,
  ImageBackground,
  Text,
  View,
} from "react-native";

import { Tag, Tags } from "@/components";
import { align, bg, gap, h, padding, row, safe, text } from "@/styles";
import { FoodType, TagInfo } from "@/types/food";

export const BasicInfo: React.FC<{
  name: string;
  category: string;
  type: FoodType;
  imgSrc: string;
  tags: TagInfo[];
  description: string;
}> = ({ name, category, imgSrc, tags, description, type }) => {
  return (
    <View style={[bg.white]}>
      <ImageBackground
        source={{ uri: imgSrc }}
        resizeMode="cover"
        style={h(240)}
      >
        <View
          style={[h("fill"), { backgroundColor: "rgba(0, 0, 0, 0.04)" }]}
        ></View>
      </ImageBackground>
      <View
        style={[
          padding.horizontal(safe.horizontal),
          padding.vertical(24),
          gap(21),
        ]}
      >
        <View style={[gap(8)]}>
          <Tags tags={tags} type={type} />
          <View style={[align.baseline, gap(8)]}>
            <Text style={[text.h2, text.gray600]}>{name}</Text>
            <Text style={[text.sub1, text.gray300]}>{category}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
