import React from "react";
import { gap } from "@/styles";
import { NutrientRow } from "@/components/NutrientRow";
import { View } from "react-native";
import { Nutrients } from "@/types/food";

export const NutrientDisplay: React.FC<{
  nutrients: Nutrients;
  suggestions?: Nutrients;
  amount?: number;
}> = ({ nutrients, suggestions, amount = 100 }) => {
  const normalize = (value?: number) => value && (value / amount) * 100;

  return (
    <View style={gap(12)}>
      <NutrientRow
        name="탄수화물"
        value={normalize(nutrients.carbohydrate)}
        suggestion={suggestions?.carbohydrate}
      />
      <NutrientRow
        sub
        name="당류"
        value={normalize(nutrients.sugar)}
        suggestion={suggestions?.sugar}
      />
      <NutrientRow
        name="단백질"
        value={normalize(nutrients.protein)}
        suggestion={suggestions?.protein}
      />
      <NutrientRow
        name="지방"
        value={normalize(nutrients.fat)}
        suggestion={suggestions?.fat}
      />
    </View>
  );
};
