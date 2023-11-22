import React, { useState } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  ColorValue,
  Button,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";

import {
  align,
  bg,
  colors,
  gap,
  margin,
  padding,
  round,
  row,
  safe,
  text,
} from "@/styles";
import { Icon } from "@/icons";
import { useNavigation } from "@react-navigation/native";
import { ProductWithDetails } from "@/types/product";
import { NutrientRow } from "./NutrientRow";
import { Nutrients } from "@/types/food";
import { Tag } from "@/components";

export const BasicInfo: React.FC<{
  initVariant: number;
  displayName: string;
  smallCategory: string;
  nutrients: Nutrients;
  totalWeight: number | undefined;
  imageSrc: string;
  servingSize: string;
  onServingSizePress: () => void;
  tags: { title: string; bg: ColorValue; txt: ColorValue }[];
}> = ({
  initVariant,
  displayName,
  smallCategory,
  nutrients,
  totalWeight,
  imageSrc,
  servingSize,
  onServingSizePress,
  tags,
}) => {
  const [variant, setVariant] = useState(initVariant);

  const toggleVariant = () => {
    setVariant(variant > 0 ? 0 : 1);
  };

  const buttonTitles = ["반의 반", "반", "전체"];

  return (
    <View style={[padding.top(20), bg.white]}>
      <View style={[gap(13), padding.horizontal(safe.horizontal)]}>
        <View style={[gap(8), { flex: 1 }]}>
          <TouchableOpacity onPress={toggleVariant}>
            <View style={[row, gap(8)]}>
              <Text style={[text.h3, text.gray600, { flex: 1 }]}>
                음식 정보
              </Text>
              {variant === 0 && (
                <Icon.up_wide width={30} height={30} fill={colors.gray500} />
              )}
              {variant > 0 && (
                <Icon.down_wide width={30} height={30} fill={colors.gray500} />
              )}
            </View>
          </TouchableOpacity>
          {variant === 1 && (
            <View style={[gap(12), padding.bottom(12)]}>
              <View style={[row, gap(12), padding.vertical(6)]}>
                <Image
                  style={{ width: 56, height: 56, borderRadius: 12 }}
                  source={{
                    uri: imageSrc,
                  }}
                />
                <View style={[gap(8), { flex: 1 }]}>
                  <View style={[row, gap(6)]}>
                    {tags.map(({ title, bg, txt }) => (
                      <Tag key={title} bgClr={bg} txtClr={txt}>
                        {title}
                      </Tag>
                    ))}
                  </View>
                  <View style={[row, gap(6), { alignItems: "center" }]}>
                    <Text style={[text.sub1]}>{displayName}</Text>
                    <Text style={[text.sub2, text.gray400]}>
                      {smallCategory}
                    </Text>
                  </View>
                </View>
              </View>
              <TouchableOpacity
                style={[
                  row,
                  align.center,
                  round.lg,
                  padding.left(12),
                  padding.right(6),
                  bg.gray100,
                  { alignSelf: "flex-start", height: 37 },
                ]}
                onPress={onServingSizePress}
              >
                <Text style={[text.btn2, text.gray400]}>{servingSize}</Text>
                <Icon.down width={28} height={28} fill={colors.gray400} />
              </TouchableOpacity>
              <View style={gap(16)}>
                <View style={gap(12)}>
                  <View style={gap(6)}>
                    <NutrientRow
                      name="탄수화물"
                      value={nutrients.carbohydrate}
                    />
                    <NutrientRow name="   당류" value={nutrients.sugar} />
                  </View>
                  <NutrientRow name="단백질" value={nutrients.protein} />
                  <NutrientRow name="지방" value={nutrients.fat} />
                </View>
              </View>
              <TouchableOpacity onPress={() => setVariant(2)}>
                <View
                  style={[
                    bg.primaryTrans,
                    padding.vertical(12),
                    {
                      flex: 1,
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 8,
                    },
                  ]}
                >
                  <Text style={text.primary}>수정하기</Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
          {variant === 2 && (
            <View style={[gap(12), padding.bottom(12)]}>
              <TouchableOpacity onPress={() => setVariant(1)}>
                <View
                  style={[
                    bg.primaryTrans,
                    padding.vertical(12),
                    {
                      flex: 1,
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 8,
                    },
                  ]}
                >
                  <Text style={text.primary}>수정완료</Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        </View>
        <View style={[bg.gray50, { height: 1 }]} />
      </View>
    </View>
  );
};
