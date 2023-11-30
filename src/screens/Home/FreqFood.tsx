import React from "react";
import { Text, View, Image } from "react-native";

import { bg, margin, padding, row, text, gap, align, round } from "@/styles";
import type { Nutrients } from "@/types/food";

export const FreqFood: React.FC<{
  imageSrc: string;
  name: string;
  nutrients: Nutrients;
}> = ({ imageSrc, name, nutrients }) => {
  return (
    <View style={[row, bg.white, margin.right(8), round.lg, gap(12)]}>
      <View style={[padding.vertical(8), padding.horizontal(8), align.center]}>
        <Image
          style={[round.lg]}
          source={{ uri: imageSrc, width: 60, height: 60 }}
        />
      </View>
      <View style={[padding.vertical(4)]}>
        <Text style={[text.body1]}>{name}</Text>
        <Text style={[text.body2]}>유통상품</Text>
        <Text style={[text.body2]}>혈당 태그</Text>
      </View>
      <View style={[margin.left(8), align.start, padding.vertical(4)]}>
        <Text style={[text.body2]}>탄수화물 {nutrients.carbohydrate}g</Text>
        <Text style={[text.body2]}>단백질 {nutrients.protein}g</Text>
        <Text style={[text.body2]}>지방 {nutrients.fat}g</Text>
      </View>
    </View>
  );
};
