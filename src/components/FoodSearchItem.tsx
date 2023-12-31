import React, { useEffect, useMemo, useState } from "react";
import { ImageBackground, Text, View, Animated } from "react-native";
import { Motion } from "@legendapp/motion";

import {
  align,
  bg,
  colors,
  column,
  fill,
  gap,
  h,
  margin,
  padding,
  round,
  row,
  text,
  w,
} from "@/styles";
import type { FoodType, TagInfo } from "@/types/food";

import { Clickable } from "./Clickable";
import { Tag } from "./Tag";
import { Tags } from "@/components/Tags";

interface Props {
  onPress?: () => void;
  imageSrc?: string;
  tags: TagInfo[];
  name: string;
  category: string;
  type: FoodType;
}

const Item: React.FC<Props> = ({
  onPress,
  imageSrc,
  tags,
  name,
  category,
  type,
}) => (
  <Clickable
    onPress={onPress}
    style={margin.horizontal(-12)}
    viewStyle={round.md}
  >
    <View style={[row, gap(12), align.center, padding(12)]}>
      <View
        style={[
          h(56),
          w(56),
          round.md,
          padding(5),
          bg.gray50,
          { overflow: "hidden" },
        ]}
      >
        <ImageBackground
          source={{
            uri:
              imageSrc ??
              "https://sparcs-newara-dev.s3.amazonaws.com/files/placeholder.png",
          }}
          style={bg.white}
        >
          <View
            style={[h("fill"), { backgroundColor: "rgba(0, 0, 0, 0.04)" }]}
          ></View>
        </ImageBackground>
      </View>
      <View style={[column, gap(6), fill]}>
        <Tags tags={tags} type={type} />
        <View style={[row, gap(8), { alignItems: "center" }]}>
          <Text
            style={[text.sub2, text.gray600, { flexShrink: 1 }]}
            numberOfLines={1}
          >
            {name}
          </Text>
          <Text
            style={[text.body2, text.gray300, { flexShrink: 0 }]}
            numberOfLines={1}
          >
            {category}
          </Text>
        </View>
      </View>
    </View>
  </Clickable>
);

const Skeleton: React.FC = React.memo(() => {
  const blink = useBlink();

  return useMemo(() => randomArray(5, { min: 100, max: 200 }), []).map(
    (value, index) => (
      <Motion.View
        key={index}
        style={[
          row,
          gap(12),
          align.center,
          padding(12),
          margin.horizontal(-12),
        ]}
        {...blink}
      >
        <Motion.View style={[h(56), w(56), round.md, bg.gray100]} />
        <View style={[column, gap(6), fill]}>
          <View style={[row, gap(8)]}>
            {useMemo(() => randomArray(2, { min: 30, max: 60 }), []).map(
              (value, index) => (
                <View
                  key={index}
                  style={[h(26), w(value), bg.gray100, round.sm]}
                />
              ),
            )}
          </View>
          <View style={[row, gap(8), { alignItems: "center" }]}>
            <View style={[h(24), w(value), bg.gray100, round.sm]} />
          </View>
        </View>
      </Motion.View>
    ),
  );
});

const randomArray = (length: number, scope: { min: number; max: number }) =>
  Array.from(
    { length },
    () => scope.min + (scope.max - scope.min) * Math.random(),
  );

const useBlink = (period = 1000) => {
  const [opaque, setOpaque] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setOpaque(opaque => !opaque);
    }, period);
    return () => clearInterval(interval);
  }, [setOpaque]);

  return {
    animate: { opacity: opaque ? 0.2 : 1 },
    transition: { duration: period },
  };
};

export const FoodSearchItem = Object.assign(Item, { Skeleton });
