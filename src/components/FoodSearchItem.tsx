import React from "react";
import { align, bg, column, fill, gap, padding, row, text } from "@/styles";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Tag, type TagTitle } from "@/components/Tag";

interface Props {
  onPress?: () => void;
  imageSrc: string;
  tags: TagTitle[];
  name: string;
  category: string;
}

export const FoodSearchItem: React.FC<Props> = ({
  onPress,
  imageSrc,
  tags,
  name,
  category,
}) => (
  <TouchableOpacity
    style={[bg.white, padding.vertical(12), row, gap(12), align.center]}
    onPress={onPress}
  >
    <Image
      style={{ height: 56, width: 56, borderRadius: 12 }}
      source={{ uri: imageSrc }}
    />
    <View style={[column, gap(6), fill]}>
      <View style={[row, gap(8)]}>
        {tags.map(tag => (
          <Tag key={tag} title={tag} />
        ))}
      </View>
      <View style={[row, gap(8), { alignItems: "center" }]}>
        <Text style={[text.sub1, text.gray600]}>{name}</Text>
        <Text style={[text.sub2, text.gray300]}>{category}</Text>
      </View>
    </View>
  </TouchableOpacity>
);
