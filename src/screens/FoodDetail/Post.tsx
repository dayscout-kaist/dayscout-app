import React from "react";
import {
  type GestureResponderEvent,
  Image,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { Icon } from "@/icons";
import {
  align,
  bg,
  colors,
  fill,
  gap,
  padding,
  round,
  row,
  safe,
  text,
} from "@/styles";

export const Post: React.FC<{
  count: number;
  avatarSrc: string;
  review: string;
  onPress: (event: GestureResponderEvent) => void;
}> = ({ count, avatarSrc, review, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={[
          row,
          align.center,
          padding.horizontal(safe.horizontal),
          padding.vertical(20),
          bg.white,
        ]}
      >
        <View style={[fill, gap(15)]}>
          <View style={[row, align.center, gap(10)]}>
            <Text style={[text.h3, text.gray600]}>포스트</Text>
            <Text style={[text.sub1, text.gray300]}>{count}</Text>
          </View>
          <View style={[row, align.center, gap(14)]}>
            <Image
              style={[round.full]}
              source={{ uri: avatarSrc, width: 40, height: 40 }}
            />
            <Text style={[text.body2, text.gray500, fill]} numberOfLines={2}>
              {review}
            </Text>
          </View>
        </View>
        <Icon.right width={30} height={30} fill={colors.gray500} />
      </View>
    </TouchableWithoutFeedback>
  );
};
