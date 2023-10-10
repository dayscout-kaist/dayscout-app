import React from "react";
import { StyleSheet, Text, View } from "react-native";
import type { RootStackScreenProps } from "@/navigation/types";
import {
  align,
  bg,
  colors,
  column,
  fill,
  gap,
  justify,
  margin,
  padding,
  row,
  safe,
  text,
} from "@/styles";
import {
  BottomButton,
  NumberInput,
  NumberInputWithUnit,
  ToggleButton,
} from "@/components";

export const FoodInfo: React.FC<RootStackScreenProps<"FoodInfo">> = ({
  navigation,
  route: {
    params: { foodInfo },
  },
}) => {
  return (
    <View style={[bg.white, padding.horizontal(safe.horizontal), { flex: 1 }]}>
      <View style={[column, gap(4), padding.top(20), padding.bottom(24)]}>
        <Text style={[text.subhead, text.gray6D]}>{foodInfo.manufacturer}</Text>
        <Text style={[text.title1Emph]}>{foodInfo.name}</Text>
      </View>
      <View style={[row, justify.between, align.center]}>
        <Text style={[text.body]}>총 내용량</Text>
        <View style={[row, gap(10)]}>
          <NumberInput
            placeholder="0"
            initVal={foodInfo.content.totalWeight}
            style={{ width: 120 }}
          />
          <ToggleButton
            key1="g"
            key2="ml"
            initVal={foodInfo.content.primaryUnit}
          />
        </View>
      </View>
      <View
        style={[
          margin.vertical(16),
          {
            borderBottomColor: colors.gray97,
            borderBottomWidth: StyleSheet.hairlineWidth,
          },
        ]}
      />
      <View style={[row, gap(16)]}>
        <View style={[fill, column, gap(4)]}>
          <Text style={[padding.left(5), text.body]}>탄수화물</Text>
          <NumberInputWithUnit
            unit="g"
            placeholder="0"
            initVal={foodInfo.content.nutrients.carbohydrate}
          />
        </View>
        <View style={[fill, column, gap(4)]}>
          <Text style={[padding.left(5), text.body]}>단백질</Text>
          <NumberInputWithUnit
            unit="g"
            placeholder="0"
            initVal={foodInfo.content.nutrients.protein}
          />
        </View>
        <View style={[fill, column, gap(4)]}>
          <Text style={[padding.left(5), text.body]}>지방</Text>
          <NumberInputWithUnit
            unit="g"
            placeholder="0"
            initVal={foodInfo.content.nutrients.fat}
          />
        </View>
      </View>
      <BottomButton
        title="다음"
        onPress={() => {
          // TODO: Send modified informations to the next page
          navigation.navigate("SelectIntake", { foodInfo: foodInfo });
        }}
      />
    </View>
  );
};
