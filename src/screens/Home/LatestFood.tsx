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

export const LatestFood: React.FC<{
  imageSrc: string;
  name: string;
}> = ({ imageSrc, name }) => {
  return (
    <View style={[bg.white, margin.right(8), round.lg]}>
      <View style={[padding.vertical(8), padding.horizontal(8), align.center]}>
        <Image
          style={[round.lg]}
          source={{ uri: imageSrc, width: 90, height: 90 }}
        />
      </View>
      <Text style={[text.body1, margin.left(12), margin.bottom(8)]}>
        {name}
      </Text>
    </View>
  );
};
