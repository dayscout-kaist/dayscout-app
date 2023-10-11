import React from "react";
import { Button, Text, View } from "react-native";

import { HomeTabScreenProps } from "@/navigation/types";
import { text } from "@/styles";

export const Home: React.FC<HomeTabScreenProps<"Home">> = ({ navigation }) => {

  return (
    <View>
      <Text style={[text.title3, { padding: 20 }]}>핵심 기능 데모이며, 상세 UI 및 기능은 모두
        구현되어 있지 않습니다. </Text>
      <Button title="이미지로 검색" onPress={() => navigation.push("ImageSearch")} />
      <Button title="텍스트로 검색" onPress={() => navigation.push("TextSearch")} />
      <Button title="직접 입력" onPress={() => navigation.push("FoodInfo",
        { content: { nutrients: {} } })} />
    </View>
  );
};
