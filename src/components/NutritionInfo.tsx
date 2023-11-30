import React from "react";
import { type ColorValue, Text, View } from "react-native";

import { ActionBox, Clickable, Tag } from "@/components";
import { Icon } from "@/icons";
import {
  align,
  bg,
  colors,
  gap,
  h,
  justify,
  padding,
  round,
  row,
  safe,
  text,
} from "@/styles";
import type { Nutrients } from "@/types/food";

import { NutrientRow } from "./NutrientRow";
import { useSelect } from "@/hooks";

export const NutritionInfo: React.FC<{
  totalWeight: number;
  nutrients: Nutrients;
  suggestions?: Nutrients;
}> = ({ totalWeight, nutrients, suggestions }) => {
  const { open, selected } = useSelect({
    title: "영양성분 기준",
    options: ["100g당", "총 내용량당", "1회 제공량당"],
    initial: "100g당",
  });

  return (
    <View style={[gap(12), padding.vertical(16)]}>
      <View style={[row, justify.between, align.center]}>
        <Clickable
          viewStyle={[
            row,
            align.center,
            round.md,
            padding.left(12),
            padding.right(6),
            bg.gray100,
            h(37),
          ]}
          onPress={open}
        >
          <Text style={[text.btn2, text.gray400]}>{selected}</Text>
          <Icon.down width={28} height={28} fill={colors.gray400} />
        </Clickable>
        <Text style={[text.sub2, text.gray400]}>총 {totalWeight}g</Text>
      </View>
      <View style={gap(12)}>
        <NutrientRow
          name="탄수화물"
          value={nutrients.carbohydrate}
          suggestion={suggestions?.carbohydrate}
        />
        <NutrientRow
          sub
          name="당류"
          value={nutrients.sugar}
          suggestion={suggestions?.sugar}
        />
        <NutrientRow
          name="단백질"
          value={nutrients.protein}
          suggestion={suggestions?.protein}
        />
        <NutrientRow
          name="지방"
          value={nutrients.fat}
          suggestion={suggestions?.fat}
        />
      </View>
    </View>
  );
};
