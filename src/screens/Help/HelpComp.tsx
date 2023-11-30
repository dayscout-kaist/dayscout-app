import React from "react";
import { Text, View, Image } from "react-native";
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

export const HelpComp: React.FC<{
  imageSrc: string;
  name: string;
  contents: string;
}> = ({ imageSrc, name, contents }) => {
  return (
    <View
      style={[
        bg.gray100,
        margin.horizontal(safe.horizontal),
        round.lg,
        { height: 600 },
      ]}
    >
      <View style={[align.center]}>
        <Image source={{ uri: imageSrc, width: 350, height: 350 }} />
      </View>

      <Text
        style={[
          text.h2,
          margin.vertical(20),
          margin.horizontal(12),
          { textAlign: "center" },
          { textAlignVertical: "center" },
        ]}
      >
        {name}
      </Text>
      <Text
        style={[
          text.body1,
          margin.bottom(20),
          margin.horizontal(12),
          { textAlign: "center" },
          { textAlignVertical: "center" },
        ]}
      >
        {contents}
      </Text>
    </View>
  );
};
