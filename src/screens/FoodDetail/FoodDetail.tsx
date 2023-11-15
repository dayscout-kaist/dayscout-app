import React from "react";
import { Button, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { BottomButton } from "@/components";
import { column, fill, gap } from "@/styles";
import type { ProductWithDetails } from "@/types/product";

import { BasicInfo } from "./BasicInfo";

export const FoodDetail: React.FC = () => {
  const navigation = useNavigation();

  const data: ProductWithDetails = {
    id: 100581350,
    name: "데자와 로얄 밀크티 500ml",
    imageSrc:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D",
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
    <View style={[fill, column, gap(12)]}>
      <BasicInfo
        name={data.displayName}
        category={data.smallCategory}
        imgSrc={data.imageSrc}
        tags={[
          { title: "추정치", bg: "#ffe5c3", txt: "#ff980f" },
          { title: "1,000회 이상 추가됨", bg: "#fdbec1", txt: "#eb2a2a" },
        ]}
        description="여기에 어떤 내용이 들어가는 것이 좋을까요"
      />
      <Button
        title="FoodReview"
        onPress={() => navigation.navigate("FoodReview")}
      />
      <Button
        title="AddReview"
        onPress={() => navigation.navigate("AddReview")}
      />
      <Button
        title="FoodCalculate"
        onPress={() => navigation.navigate("FoodCalculate")}
      />
      <BottomButton
        title="영양성분 계산하기"
        onPress={() => {}}
        style="primary"
      />
    </View>
  );
};
