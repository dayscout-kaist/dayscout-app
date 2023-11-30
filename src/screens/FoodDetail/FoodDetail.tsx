import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Button, ScreenBackground } from "@/components";
import { useFoodDetail } from "@/hooks/useFoodDetail";
import { RootStackScreenProps } from "@/navigation/types";
import { column, gap, text } from "@/styles";

import { BasicInfo } from "./BasicInfo";
import { NutritionFacts } from "./NutritionFacts";
import { Post } from "./Post";
import { useSelectBottomSheet } from "@/utils/useSelectBottomSheet";

interface ServingSize {
  key: number;
  text: string;
}

const servingSizes: ServingSize[] = [
  { key: 0, text: "100g당" },
  { key: 1, text: "총 내용량당" },
  { key: 2, text: "1회 제공량당" },
];

export const FoodDetail: React.FC<RootStackScreenProps<"FoodDetail">> = ({
  route: {
    params: { foodId },
  },
}) => {
  const { data: food, isLoading } = useFoodDetail(foodId);

  const navigation = useNavigation();

  const [selectedServingSize, setSelectedServingSize] = useState("100g당");

  const { open } = useSelectBottomSheet({
    title: "영양성분 기준",
    options: ["100g당", "총 내용량당", "1회 제공량당"],
    selected: selectedServingSize,
  });

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
            servingSize={selectedServingSize}
            onServingSizePress={() => {
              open().then(setSelectedServingSize);
            }}
          />
          <View style={{ height: 192 }} />
        </View>
      </ScrollView>
      <Button
        title="영양성분 계산하기"
        onPress={() => navigation.navigate("FoodCalculate")}
        style="primary"
        stick="bottom"
      />
    </ScreenBackground>
  );
};
