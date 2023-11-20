import React from "react";
import { Text, View } from "react-native";

import { Tag } from "@/components";
import { bg, gap, padding, row, safe, text } from "@/styles";

import { ActionBox } from "./ActionBox";
import { NutrientRow } from "./NutrientRow";

export const NutritionFacts: React.FC = () => (
  <View style={[padding.top(20), bg.white]}>
    <View style={[gap(13), padding.horizontal(safe.horizontal)]}>
      <View style={gap(8)}>
        <View style={[row, gap(10)]}>
          <Text style={[text.h3, text.gray600]}>영양성분</Text>
          <Tag bgClr="#a40fff40" txtClr="#a40fff">
            유통식품
          </Tag>
        </View>
        <Text style={[text.body2, text.gray300]}>
          유저들이 입력한 데이터를 통해 추정된 정보예요
        </Text>
      </View>
      <View style={gap(12)}>
        <View style={gap(12)}>
          <View style={gap(6)}>
            <NutrientRow name="탄수화물" value="10g" />
            <NutrientRow name="   당류" value="10g" />
          </View>
          <NutrientRow name="단백질" value="10g" />
          <NutrientRow name="지방" value="10g" />
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
