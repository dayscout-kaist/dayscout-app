import React from "react";
import { Animated, Text, TouchableWithoutFeedback, View } from "react-native";

import { Icon } from "@/icons";
import {
  align,
  center,
  colors,
  gap,
  justify,
  padding,
  round,
  row,
  text,
} from "@/styles";
import { TossFace } from "@/utils/TossFace";
import { Clickable } from "@/components/Clickable";

export const ActionBox: React.FC<{
  icon: string;
  main: string;
  desc: string;
  onPress: () => void;
}> = ({ icon, main, desc, onPress }) => {
  // const animation = new Animated.Value(0);

  // const scale = animation.interpolate({
  //   inputRange: [0, 1],
  //   outputRange: [1, 0.95],
  // });
  // const bgClr = animation.interpolate({
  //   inputRange: [0, 1],
  //   outputRange: [colors.white, colors.gray50],
  // });
  // const iconBgclr = animation.interpolate({
  //   inputRange: [0, 1],
  //   outputRange: [colors.gray50, colors.gray100],
  // });

  // const onPressIn = () =>
  //   Animated.spring(animation, {
  //     toValue: 1,
  //     speed: 20,
  //     useNativeDriver: true,
  //   }).start();
  // const onPressOut = () =>
  //   Animated.spring(animation, {
  //     toValue: 0,
  //     speed: 20,
  //     useNativeDriver: true,
  //   }).start();

  return (
    <Clickable onPress={onPress}>
      <Animated.View
        style={[
          row,
          justify.between,
          align.center,
          {
            height: 74,
            // transform: [{ scale }]
          },
        ]}
      >
        <View style={[row, gap(20)]}>
          <Animated.View
            style={[
              center,
              round.full,
              {
                width: 54,
                height: 54,
                // backgroundColor: iconBgclr,
              },
            ]}
          >
            <TossFace icon={icon} style={{ fontSize: 32 }} />
          </Animated.View>
          <View>
            <Text style={[text.body2, text.gray300]}>{main}</Text>
            <Text style={[text.sub2, text.gray600]}>{desc}</Text>
          </View>
        </View>
        <Icon.right width={30} height={30} fill={colors.gray500} />
      </Animated.View>
    </Clickable>
  );
};
