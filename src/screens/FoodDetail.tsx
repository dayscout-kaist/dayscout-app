import React from "react";
import { Button, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { BottomButton } from "@/components";

export const FoodDetail: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>FoodDetail Page</Text>
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
