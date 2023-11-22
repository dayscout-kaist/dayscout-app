import React from "react";
import { type ColorValue, Text, TouchableOpacity, View } from "react-native";

import { Tag } from "@/components";
import { Icon } from "@/icons";
import {
  align,
  bg,
  colors,
  gap,
  padding,
  round,
  row,
  safe,
  text,
} from "@/styles";
import type { Nutrients } from "@/types/food";

import { ActionBox } from "@/components";
import { NutrientRow } from "./NutrientRow";

export const NutritionFacts: React.FC<{
  tag: { title: string; bg: ColorValue; txt: ColorValue };
  nutrients: Nutrients;
  servingSize: string;
  onServingSizePress: () => void;
}> = ({ tag, nutrients, servingSize, onServingSizePress }) => (
  <View style={[padding.top(20), bg.white]}>
    <View style={[gap(13), padding.horizontal(safe.horizontal)]}>
      <View style={gap(8)}>
        <View style={[row, align.center, gap(10)]}>
          <Text style={[text.h3, text.gray600]}>영양성분</Text>
          <Tag bgClr={tag.bg} txtClr={tag.txt}>
            {tag.title}
          </Tag>
        </View>
        <Text style={[text.body2, text.gray300]}>
          유저들이 입력한 데이터를 통해 추정된 정보예요
        </Text>
      </View>
      <View style={gap(12)}>
        <TouchableOpacity
          style={[
            row,
            align.center,
            round.md,
            padding.left(12),
            padding.right(6),
            bg.gray100,
            { alignSelf: "flex-start", height: 37 },
          ]}
          onPress={onServingSizePress}
        >
          <Text style={[text.btn2, text.gray400]}>{servingSize}</Text>
          <Icon.down width={28} height={28} fill={colors.gray400} />
        </TouchableOpacity>
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
    <View style={[padding.vertical(10), padding.horizontal(12)]}>
      <ActionBox
        icon="🍞"
        main="정보가 정확하지 않다면"
        desc="영양정보 수정 제안하기"
        onPress={() => {}}
      />
    </View>
  </View>
);
