import React from "react";
import { Text, View } from "react-native";

import { Clickable } from "./Clickable";
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
  text,
} from "@/styles";
import type { Nutrients } from "@/types/food";

import { NutrientRow } from "./NutrientRow";
import { useSelect } from "@/hooks";
import { NutrientDisplay } from "@/components/NutrientDisplay";

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
        <Text style={[text.sub2, text.gray400]}>총 {totalWeight} g</Text>
      </View>
      <NutrientDisplay
        nutrients={nutrients}
        suggestions={suggestions}
        amount={selected === "총 내용량당" ? totalWeight : undefined}
      />
    </View>
  );
};
