import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, GestureResponderEvent } from 'react-native';
import { css } from '@emotion/native';
import type { RootStackScreenProps } from "@/navigation/types";
import { Picker } from '@react-native-picker/picker';
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

interface FoodData {
  식품명: string;
  제조사명: string;
  단위중량: string;
  식품중량: string;
  단백질: number|null;
  지방: number|null;
  탄수화물: number|null;
  당류: number|null;
}


type Props = {
  data?: FoodData;
};

export interface AbsoluteUnit {
  type: "absolute";
}


const containerStyle = css`
  padding: 20px;
`;

const inputStyle = css`
  height: 40px;
  border-color: gray;
  border-width: 1px;
  padding: 10px;
  margin-bottom: 20px;
`;

const infoContainerStyle = css`
  margin-top: 20px;
`;

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
  route: { params },
  navigation,
}) => {
  
  const [unit, setUnit] = useState('전체 중량');
  const [quantity, setQuantity] = useState<number | string>('');
  const [nutritionInfo, setNutritionInfo] = useState<FoodData | null>(null);
  const [unitWeight,setUnitWeight] = useState<number>(1);

  const calculateNutrition = (selectedUnit: string, selectedQuantity: number | string) => {
    setUnitWeight(selectedUnit === '컵' ? 250 : selectedUnit === '공기' ? 300 : selectedUnit === '그램' ? 1 : selectedUnit === '한 스푼' ? 15 : params.foodInfo.content.totalWeight);
    const factor = Number(selectedQuantity) * unitWeight / 100;

    return {
      식품명: params.foodInfo.name,
      제조사명: params.foodInfo.manufacturer,
      단위중량: `100${params.foodInfo.content.primaryUnit}`,
      식품중량: `${params.foodInfo.content.totalWeight}${params.foodInfo.content.primaryUnit}`,
      단백질: params.foodInfo.content.nutrients.protein ? params.foodInfo.content.nutrients.protein * factor : null,
      지방: params.foodInfo.content.nutrients.fat ? params.foodInfo.content.nutrients.fat * factor : null,
      탄수화물: params.foodInfo.content.nutrients.carbohydrate? params.foodInfo.content.nutrients.carbohydrate * factor : null,
      당류: params.foodInfo.content.nutrients.sugar ? params.foodInfo.content.nutrients.sugar * factor : null,
    };
  };

  useEffect(() => {
    if (unit && quantity) {
      setNutritionInfo(calculateNutrition(unit, quantity));
    }
  }, [unit, quantity]);

  return (
    <View style={containerStyle}>
      <Picker selectedValue={unit} onValueChange={(itemValue: React.SetStateAction<string>) => setUnit(itemValue)}>
        <Picker.Item label="전체 중량" value="전체 중량" />
        <Picker.Item label="한 컵" value="한 컵" />
        <Picker.Item label="한 공기" value="한 공기" />
        <Picker.Item label="한 스푼" value="한 스푼" />
        <Picker.Item label="그램" value="그램" />
      </Picker>

      {unit && (unit === '그램' || unit === '한 스푼') ?
        <TextInput
          value={String(quantity)}
          onChangeText={(text) => setQuantity(Number(text))}
          placeholder="입력해주세요"
          keyboardType="numeric"
          style={inputStyle}
        /> :
        <Picker selectedValue={quantity} onValueChange={(itemValue: React.SetStateAction<string | number>) => setQuantity(itemValue)}>
          {[1/4, 1/3, 1/2, ...Array.from({ length: (Math.floor(params.foodInfo.content.totalWeight / unitWeight))}, (_, i) => i + 1)].map((opt, index) => (
            <Picker.Item key={index} label={String(opt)} value={opt} />
          ))}
        </Picker>
      }

      {nutritionInfo && (
        <View style={infoContainerStyle}>
          <Text>식품명: {nutritionInfo.식품명}</Text>
          <Text>제조사명: {nutritionInfo.제조사명}</Text>
          <Text>식품전체중량: {nutritionInfo.식품중량}</Text>
          <Text>입력한식품중량: {Number(quantity) * unitWeight}</Text>
          <Text>단백질: {nutritionInfo.단백질? `${nutritionInfo.단백질.toFixed(2)}g` : "해당없음"}</Text>
          <Text>지방: {nutritionInfo.지방? `${nutritionInfo.지방.toFixed(2)}g` : "해당없음"}</Text>
          <Text>탄수화물: {nutritionInfo.탄수화물? `${nutritionInfo.탄수화물.toFixed(2)}g` : "해당없음"}</Text>
          <Text>당류: {nutritionInfo.당류? `${nutritionInfo.당류.toFixed(2)}g` : "해당없음"}</Text>
        </View>
      )}
    </View>
  );
};