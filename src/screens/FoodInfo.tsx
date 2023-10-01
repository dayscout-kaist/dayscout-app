import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  type GestureResponderEvent,
} from "react-native";
import type { RootStackScreenProps } from "@/navigation/types";
import {
  bg,
  column,
  gap,
  justify,
  margin,
  padding,
  round,
  row,
  text,
} from "@/styles";

interface NutritionFacts {
  id: number;
  name: string;
  unit: string;
  total_size: number;
  serving_size: number;
  calories: number;
  fat: number;
  carbohydrate: number;
  protein: number;
  source: string;
}

const MyButton: React.FC<{
  title: string;
  onPress: (event: GestureResponderEvent) => void;
}> = ({ title, onPress }) => {
  return (
    <View style={{ padding: 16 }}>
      <TouchableOpacity
        style={[
          round.lg,
          padding.horizontal(16),
          padding.vertical(11),
          bg.primary,
          { alignItems: "center" },
        ]}
        onPress={onPress}
      >
        <Text style={[text.body]}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export const FoodInfo: React.FC<RootStackScreenProps<"FoodInfo">> = ({
  navigation,
}) => {
  const data: NutritionFacts = {
    id: 1,
    name: "데자와",
    unit: "g",
    total_size: 240,
    serving_size: 240,
    calories: 95,
    fat: 1.9,
    carbohydrate: 18,
    protein: 2,
    source: "식품영양성분 DB",
  };

  const essentialNutrients = [
    { name: "탄수화물", val: data.carbohydrate },
    { name: "단백질", val: data.protein },
    { name: "지방", val: data.fat },
  ];

  return (
    <View style={[bg.white, { flex: 1 }]}>
      <View
        style={[
          column,
          gap(4),
          padding.top(20),
          padding.horizontal(16),
          padding.bottom(24),
        ]}
      >
        <Text style={[text.subhead, text.gray6D]}>{data.source}</Text>
        <Text style={[text.title1Emph]}>{data.name}</Text>
      </View>
      <Text style={[padding.horizontal(16), text.body]}>
        총 내용량 {data.total_size}
        {data.unit}
      </Text>
      <View style={[margin(16), round.lg, bg.grayF2]}>
        {essentialNutrients.map((el) => (
          <View
            key={el.name}
            style={[
              row,
              justify.between,
              padding.horizontal(16),
              padding.vertical(11),
            ]}
          >
            <Text style={text.body}>{el.name}</Text>
            <Text style={[text.body, { textAlign: "right" }]}>
              {el.val}
              {data.unit}
            </Text>
          </View>
        ))}
      </View>
      <MyButton
        title="다음"
        onPress={() => {
          navigation.navigate("SelectIntake");
        }}
      />
    </View>
  );
};
