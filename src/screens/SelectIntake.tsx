import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { css } from '@emotion/native';
import { Picker } from '@react-native-picker/picker';

interface FoodData {
  식품명: string;
  제조사명: string;
  단위중량: string;
  식품중량: string;
  에너지_kcal: number;
  단백질_g: number;
  지방_g: number;
  탄수화물_g: number;
  당류_g: number;
}

type Props = {
  data?: FoodData;
};

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

export const SelectIntake: React.FC<Props> = ({ data = {
  식품명: "국밥_돼지머리",
  제조사명: "해당없음",
  단위중량: "100g",
  식품중량: "900g",
  에너지_kcal: 137,
  단백질_g: 6.7,
  지방_g: 5.16,
  탄수화물_g: 15.94,
  당류_g: 0.16,
} }) => {
  
  const [unit, setUnit] = useState('전체 중량');
  const [quantity, setQuantity] = useState<number | string>('');
  const [nutritionInfo, setNutritionInfo] = useState<FoodData | null>(null);
  const [unitWeight,setUnitWeight] = useState<number>(1);

  const calculateNutrition = (selectedUnit: string, selectedQuantity: number | string) => {
    setUnitWeight(selectedUnit === '한 컵' ? 250 : selectedUnit === '한 공기' ? 300 : selectedUnit === '그램' ? 1 : selectedUnit === '한 스푼' ? 15 : Number(data.식품중량.replace('g', '')));
    const factor = Number(selectedQuantity) * unitWeight / Number(data.단위중량.replace('g', ''));

    return {
      식품명: data.식품명,
      제조사명: data.제조사명,
      단위중량: data.단위중량,
      식품중량: data.식품중량,
      에너지_kcal: data.에너지_kcal * factor,
      단백질_g: data.단백질_g * factor,
      지방_g: data.지방_g * factor,
      탄수화물_g: data.탄수화물_g * factor,
      당류_g: data.당류_g * factor,
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
          {[1/4, 1/3, 1/2, ...Array.from({ length: (Math.floor(Number(data.식품중량.replace('g', '')) / unitWeight))}, (_, i) => i + 1)].map((opt, index) => (
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
          <Text>에너지(kcal): {nutritionInfo.에너지_kcal.toFixed(2)}</Text>
          <Text>단백질(g): {nutritionInfo.단백질_g.toFixed(2)}</Text>
          <Text>지방(g): {nutritionInfo.지방_g.toFixed(2)}</Text>
          <Text>탄수화물(g): {nutritionInfo.탄수화물_g.toFixed(2)}</Text>
          <Text>당류(g): {nutritionInfo.당류_g.toFixed(2)}</Text>
        </View>
      )}
    </View>
  );
};