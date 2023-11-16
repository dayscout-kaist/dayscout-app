import React from "react";
import { type ColorValue, Image, Text, View } from "react-native";

import { Tag } from "@/components";
import { align, bg, gap, padding, row, safe, text } from "@/styles";

export const BasicInfo: React.FC<{
  name: string;
  category: string;
  imgSrc: string;
  tags: { title: string; bg: ColorValue; txt: ColorValue }[];
  description: string;
}> = ({ name, category, imgSrc, tags, description }) => {
  return (
    <View style={[bg.white]}>
      <Image
        source={{
          uri: imgSrc,
          height: 240,
        }}
      />
      <View
        style={[
          padding.horizontal(safe.horizontal),
          padding.vertical(24),
          gap(21),
        ]}
      >
        <View style={[gap(8)]}>
          <View style={[row, gap(8)]}>
            {tags.map(({ title, bg, txt }) => (
              <Tag key={title} bgClr={bg} txtClr={txt}>
                {title}
              </Tag>
            ))}
          </View>
          <View style={[row, align.baseline, gap(8)]}>
            <Text style={[text.h2, text.gray600]}>{name}</Text>
            <Text style={[text.sub1, text.gray300]}>{category}</Text>
          </View>
        </View>
        <Text style={[text.body2, text.gray300]}>{description}</Text>
      </View>
    </View>
  );
};
