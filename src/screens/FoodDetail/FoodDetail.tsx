import React, { useRef, useState } from "react";
import { ScrollView, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { BottomSheetModal } from "@gorhom/bottom-sheet";

import { BottomButton, BottomSheet, ScreenBackground } from "@/components";
import { column, fill, gap, text } from "@/styles";

import { BasicInfo } from "./BasicInfo";
import { Post } from "./Post";
import { NutritionFacts } from "./NutritionFacts";
import { ServingSizeRow } from "./NutritionFacts/ServingSizeRow";
import { RootStackScreenProps } from "@/navigation/types";
import { useFoodDetail } from "@/hooks/useFoodDetail";

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

  const [servingSize, setServingSize] = useState<ServingSize>(servingSizes[0]);
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const navigation = useNavigation();

  if (!food) return null;

  return (
    <ScreenBackground>
      <ScrollView>
        <View style={[column, gap(12)]}>
          <BasicInfo
            name={food.content.representName || ""}
            category={food.content.className || ""}
            imgSrc={food.imageSrc || ""}
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
            servingSize={servingSize.text}
            onServingSizePress={() => {
              // TODO: Resolve double tab issue
              bottomSheetRef.current?.present();
              bottomSheetRef.current?.expand();
            }}
          />
          <View style={{ height: 192 }} />
        </View>
      </ScrollView>
      <BottomButton
        title="영양성분 계산하기"
        onPress={() => navigation.navigate("FoodCalculate")}
        style="primary"
      />
      <BottomSheet ref={bottomSheetRef}>
        <Text style={[text.h3, text.gray600]}>영양성분 기준</Text>
        {servingSizes.map(serve => (
          <ServingSizeRow
            key={serve.key}
            value={serve.text}
            onPress={() => {
              setServingSize(serve);
              bottomSheetRef.current?.close();
            }}
            selected={serve.key === servingSize.key}
          />
        ))}
      </BottomSheet>
    </ScreenBackground>
  );
};
