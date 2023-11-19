import React, { useCallback, useMemo, useRef, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { bg, padding, gap, text, safe, colors, align, row } from '@/styles';

export const DetailInfo: React.FC<{
  largeTag: string;
  totalWeight: number|null;
  carbohydrate: number|null;
  sugar: number|null;
  protein: number|null;
  fat: number|null;
  onServingSizePress: () => void;
  selectedWeight: number;
}> = ({ largeTag, totalWeight, carbohydrate, sugar, protein, fat, onServingSizePress , selectedWeight}) => {

  return (
    <>
      <View style={[bg.white]}>
        <View style={[padding.horizontal(safe.horizontal), padding.vertical(24), gap(12), padding.bottom(100)]}>
          <Text style={[text.h3]}>영양성분</Text>
          <Text>유저들이 입력한 데이터를 통해 추정된 정보에요</Text>
          <TouchableOpacity
            style={[bg.gray200, padding(10), {borderRadius:10, width: 100}]}
            onPress={onServingSizePress} // Use the prop here
          >
            <Text>{selectedWeight === 100?`${selectedWeight}g 당`:'총 내용량 당'}</Text>
          </TouchableOpacity>
          <View>
            <NutrientRow label="탄수화물" value={carbohydrate?carbohydrate * selectedWeight/100:0} />
            <NutrientRow label="당류" value={sugar?sugar * selectedWeight/100:0} />
            <NutrientRow label="단백질" value={protein?protein * selectedWeight/100:0} />
            <NutrientRow label="지방" value={fat?fat * selectedWeight/100:0} />
          </View>
          <TouchableOpacity style={[bg.primary, padding(10), align.center]}>
            <Text style={[text.white]}>영양정보 수집 제안하기</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const NutrientRow: React.FC<{ label: string; value: number }> = ({ label, value }) => {
  return (
    <View style={[row, padding(5), gap(5), align.center]}>
      <Text style={[{flex:1}]}>{label}</Text>
      <Text>{`${value}g`}</Text>
    </View>
  );
};
