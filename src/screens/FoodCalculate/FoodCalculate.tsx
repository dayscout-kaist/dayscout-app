import React, { useState } from "react";
import { ScrollView, View, Text } from "react-native";

import {
  Button,
  Section,
  NutrientInput,
  SmallButton,
  NutrientDisplay,
} from "@/components";
import { bg, fill, gap, padding, row, text, w } from "@/styles";

import { RootStackScreenProps } from "@/navigation/types";
import { Nutrients } from "@/types/food";

import { EnterContent } from "./EnterContent";
import { useTextInput } from "@/hooks";

export const FoodCalculate: React.FC<RootStackScreenProps<"FoodCalculate">> = ({
  navigation,
  route: { params: initial },
}) => {
  const [foodName, setFoodName] = useState(initial?.food.name ?? "");

  const [nutrients, setNutrients] = useState<Nutrients>(
    initial?.food.content.nutrients ?? {},
  );

  const intake = useTextInput();
  const amount = parseFloat(intake.value);

  return (
    <View style={fill}>
      <ScrollView style={bg.gray50}>
        <Section>
          <EnterContent
            food={initial?.food}
            foodName={foodName}
            setFoodName={setFoodName}
            nutrients={nutrients}
            setNutrients={setNutrients}
          />
        </Section>
        <Section>
          <View style={[gap(16), padding.bottom(18)]}>
            <Text style={[text.h3, text.gray600]}>섭취량 입력하기</Text>
            <NutrientInput input={intake} />
            <View style={[w("fill"), row, gap(8)]}>
              <SmallButton title="반의 반" style={fill} />
              <SmallButton title="반" style={fill} />
              <SmallButton title="전체" style={fill} />
            </View>
          </View>
        </Section>
        <Section>
          <Text style={[text.h3, text.gray600]}>계산된 영양정보</Text>
          <View style={padding.vertical(16)}>
            <NutrientDisplay
              nutrients={nutrients}
              amount={isNaN(amount) ? undefined : amount}
            />
          </View>
        </Section>
      </ScrollView>
      <Button
        title="나의 기록에 추가하기"
        onPress={() => navigation.navigate("FoodCalculate")}
        variant="primary"
        stick="bottom"
      />
    </View>
  );
};
