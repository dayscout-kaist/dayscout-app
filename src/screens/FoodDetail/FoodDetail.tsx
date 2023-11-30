import React, { useCallback, useState } from "react";
import { ScrollView, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Button, ScreenBackground } from "@/components";
import { useFoodDetail } from "@/hooks/useFoodDetail";
import { RootStackScreenProps } from "@/navigation/types";
import { bg, column, gap, margin, padding, round, text } from "@/styles";

import { BasicInfo } from "./BasicInfo";
import { NutritionFacts } from "./NutritionFacts";
import { Post } from "./Post";
import { useDialog, useSelect } from "@/hooks";
import { NutrientRow } from "@/screens/FoodDetail/NutritionFacts/NutrientRow";

interface ServingSize {
  key: number;
  text: string;
}

const servingSizes: ServingSize[] = [
  { key: 0, text: "100g당" },
  { key: 1, text: "총 내용량당" },
  { key: 2, text: "1회 제공량당" },
];

const nutrientNames = {
  carbohydrate: "탄수화물",
  protein: "단백질",
  fat: "지방",
  sugar: "당류",
} as const;

type Nutrient = keyof typeof nutrientNames;

export const FoodDetail: React.FC<RootStackScreenProps<"FoodDetail">> = ({
  route: {
    params: { foodId },
  },
}) => {
  const { data: food, isLoading } = useFoodDetail(foodId);

  const navigation = useNavigation();

  const { open, selected } = useSelect({
    title: "영양성분 기준",
    options: ["100g당", "총 내용량당", "1회 제공량당"],
    initial: "100g당",
  });

  const openDialog = useDialog({
    title: "이 영양정보가 정확한가요?",
    contents: (
      <View style={[padding.vertical(6)]}>
        <Text style={[text.body1, text.gray400]}>
          다른 유저가 새로 제안한 영양정보에요.
        </Text>
        <View
          style={[
            margin.vertical(12),
            padding.horizontal(16),
            padding.vertical(12),
            gap(8),
            bg.gray50,
            round.md,
          ]}
        >
          {food?.content.suggestedNutrients &&
            Object.entries(food.content.suggestedNutrients)
              .filter(([, value]) => !!value)
              .map(([nutrient, value]) => (
                <NutrientRow
                  key={nutrient}
                  name={nutrientNames[nutrient as Nutrient]}
                  value={food.content.nutrients[nutrient as Nutrient]}
                  suggestion={value}
                  hideInfo
                />
              ))}
        </View>
      </View>
    ),
    confirm: "정확해요",
    cancel: "아니에요",
  });

  const suggestionFeedback = useCallback(async () => {
    if (!food?.content.suggestedNutrients) return;
    const result = await openDialog();

    // TODO: submit result to server
  }, [food?.content.suggestedNutrients, openDialog]);

  if (!food) return null;

  return (
    <ScreenBackground>
      <ScrollView>
        <View style={[column, gap(12)]}>
          <BasicInfo
            name={food.name || ""}
            category={food.content.className || ""}
            imgSrc={
              food.imageSrc ||
              "https://sparcs-newara-dev.s3.amazonaws.com/files/placeholder.png"
            }
            tags={[
              { title: "추정치", bg: "#ffe5c3", txt: "#ff980f" },
              { title: "1,000회 이상 추가됨", bg: "#fdbec1", txt: "#eb2a2a" },
            ]}
            description="여기에 어떤 내용이 들어가는 것이 좋을까요"
          />
          <Post
            count={7}
            avatarSrc="https://sparcs-newara-dev.s3.amazonaws.com/files/NewAra_Channeltalk.jpg"
            review="맛은 있는데 혈당이 많이 올라요 어쩌구 저쩌구 개발 보름 남았다 파이팅~ 라이라이 차차차 라이 차차차"
            onPress={() => navigation.navigate("FoodReview", { foodId })}
          />
          <NutritionFacts
            tag={{ title: "유통식품", bg: "#a40fff40", txt: "#a40fff" }}
            nutrients={food.content.nutrients}
            suggestions={food.content.suggestedNutrients}
            servingSize={selected || "100g당"}
            onServingSizePress={open}
            suggestionFeedback={suggestionFeedback}
          />
          <View style={{ height: 192 }} />
        </View>
      </ScrollView>
      <Button
        title="영양성분 계산하기"
        onPress={async () => {
          if (food.content.suggestedNutrients) await suggestionFeedback();
          navigation.navigate("FoodCalculate");
        }}
        variant="primary"
        stick="bottom"
      />
    </ScreenBackground>
  );
};
