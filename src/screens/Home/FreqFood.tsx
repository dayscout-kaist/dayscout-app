import React from "react";
import {
  Button,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "@/icons";
import {
  bg,
  colors,
  column,
  margin,
  padding,
  row,
  safe,
  text,
  gap,
  align,
  justify,
  round,
} from "@/styles";
import { ProductWithDetails } from "@/types/product";

export const FreqFood: React.FC<{
  imageSrc: string;
  name: string;
  carb: number;
  protein: number;
  fat: number;
}> = ({ imageSrc, name, carb, protein, fat }) => {
  return (
    <View style={[row, bg.white, margin.right(8), round.lg, gap(12)]}>
      <View style={[padding.vertical(8), padding.horizontal(8), align.center]}>
        <Image
          style={[round.lg]}
          source={{ uri: imageSrc, width: 60, height: 60 }}
        />
      </View>
      <View style={[padding.vertical(4)]}>
        <Text style={[text.body1]}>{name}</Text>
        <Text style={[text.body2]}>유통상품</Text>
        <Text style={[text.body2]}>혈당 태그</Text>
      </View>
      <View style={[margin.left(8), align.start, padding.vertical(4)]}>
        <Text style={[text.body2]}>탄수화물 {carb}g</Text>
        <Text style={[text.body2]}>단백질 {protein}g</Text>
        <Text style={[text.body2]}>지방 {fat}g</Text>
      </View>
    </View>
  );
};
