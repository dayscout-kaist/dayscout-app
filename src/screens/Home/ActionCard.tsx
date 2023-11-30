import React from "react";
import { View, Text } from "react-native";
import { Clickable } from "@/components";
import { align, bg, fill, justify, padding, round, row, text } from "@/styles";
import { TossFace } from "@/utils/TossFace";

interface Props {
  sub: string;
  title: string;
  onPress?: () => void;
  icon: string;
}
export const ActionCard: React.FC<Props> = ({ sub, title, onPress, icon }) => {
  return (
    <Clickable
      style={[fill, round.lg]}
      viewStyle={[bg.white, round.lg]}
      onPress={onPress}
    >
      <View style={[padding(18), align.stretch]}>
        <Text style={[text.body2, text.gray400]}>{sub}</Text>
        <Text style={[text.sub1, text.gray600]}>{title}</Text>
        <View style={[row, justify.end, padding.horizontal(4)]}>
          <TossFace icon={icon} size={36} />
        </View>
      </View>
    </Clickable>
  );
};
