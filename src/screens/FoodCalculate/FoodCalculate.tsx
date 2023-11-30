import React, { useRef, useState } from "react";
import { ScrollView, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { BottomSheetModal } from "@gorhom/bottom-sheet";

import { DeprecatedBottomSheet, Button } from "@/components";
import { bg, column, fill, gap, text } from "@/styles";
import type { ProductWithDetails } from "@/types/product";

// import { BasicInfo } from "./BasicInfo";
// import { Post } from "./Post";
import { NutritionFacts } from "./NutritionFacts";
import { IntakeInput } from "./IntakeInput";
import { BasicInfo } from "./BasicInfo";
import { ServingSizeRow } from "../FoodDetail/NutritionFacts/ServingSizeRow";
// import { ServingSizeRow } from "./NutritionFacts/ServingSizeRow";

interface ServingSize {
  key: number;
  text: string;
}

const servingSizes: ServingSize[] = [
  { key: 0, text: "100g당" },
  { key: 1, text: "총 내용량당" },
  { key: 2, text: "1회 제공량당" },
];

export const FoodCalculate: React.FC = () => {
  const [servingSize, setServingSize] = useState<ServingSize>(servingSizes[0]);
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const navigation = useNavigation();

  const data: ProductWithDetails = {
    id: 100581350,
    name: "데자와 로얄 밀크티 500ml",
    imageSrc:
      "https://sparcs-newara-dev.s3.amazonaws.com/files/snowsuno-in-90s.png",
    barcodeNumber: 8801097481206,
    largeCategory: "가공식품",
    mediumCategory: "차류",
    smallCategory: "차음료",
    xSmallCategory: "기타차음료",
    displayName: "데자와 로얄 밀크티",
    nutrients: {
      carbohydrate: 19,
      protein: 1,
      fat: 1.5,
      sugar: 17,
      energy: 95,
    },
    totalWeight: 500,
  };

  return (
    <View style={fill}>
      <ScrollView style={bg.gray50}>
        <View style={[column, gap(12)]}>
          <BasicInfo
            initVariant={0}
            displayName={data.displayName}
            smallCategory={data.smallCategory}
            nutrients={data.nutrients}
            totalWeight={data.totalWeight}
            imageSrc={data.imageSrc}
            servingSize={servingSize.text}
            onServingSizePress={() => {
              // TODO: Resolve double tab issue
              bottomSheetRef.current?.present();
              bottomSheetRef.current?.expand();
            }}
            tags={[
              {
                id: 1,
                name: "유통 식품",
                colorBorder: "#a40fff40",
                colorBackground: "#a40fff",
              },
            ]}
          ></BasicInfo>
          <IntakeInput variant={0} />
          <NutritionFacts nutrients={data.nutrients} />
          <View style={{ height: 192 }} />
        </View>
      </ScrollView>
      <Button
        title="나의 기록에 추가하기"
        onPress={() => navigation.navigate("FoodCalculate")}
        style="primary"
        stick="bottom"
      />
      <DeprecatedBottomSheet ref={bottomSheetRef}>
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
      </DeprecatedBottomSheet>
    </View>
  );
};
