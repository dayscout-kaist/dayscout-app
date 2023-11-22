import React from "react";
import { Text, View } from "react-native";

import { align, bg, gap, padding, row, safe, text } from "@/styles";
import type { Nutrients } from "@/types/food";

import { NutrientRow } from "./NutrientRow";

export const NutritionFacts: React.FC<{
  nutrients: Nutrients;
}> = ({ nutrients }) => (
  <View style={[padding.top(20), bg.white]}>
    <View style={[gap(13), padding.horizontal(safe.horizontal)]}>
      <View style={gap(8)}>
        <View style={[row, align.center, gap(10)]}>
          <Text style={[text.h3, text.gray600]}>영양성분</Text>
        </View>
      </View>
      <View style={gap(16)}>
        <View style={gap(12)}>
          <View style={gap(6)}>
            <NutrientRow name="탄수화물" value={nutrients.carbohydrate} />
            <NutrientRow name="   당류" value={nutrients.sugar} />
          </View>
          <NutrientRow name="단백질" value={nutrients.protein} />
          <NutrientRow name="지방" value={nutrients.fat} />
        </View>
      </View>
      <View style={[bg.gray50, { height: 1 }]} />
    </View>
  </View>
);
