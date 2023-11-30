import React, { useEffect, useRef } from "react";
import {
  Button,
  Text,
  View,
  ScrollView,
  Animated,
  Dimensions,
} from "react-native";

import { bg, fill, inline, text } from "@/styles";
import { HomeTabScreenProps } from "@/navigation/types";
import { useScrollHeader } from "@/hooks/useScrollHeader";

export const Posts: React.FC<HomeTabScreenProps<"Posts">> = ({
  navigation,
}) => {
  const scroll = useScrollHeader();
  const { height: fullHeight } = Dimensions.get("window");

  return (
    <Animated.ScrollView // TODO: Componentize
      style={[bg.gray50, fill]}
      {...scroll}
    >
      <View
        style={[
          {
            height: fullHeight,
            position: "absolute",
            top: -fullHeight,
            left: 0,
            right: 0,
          },
          bg.white,
        ]}
      />
      <View style={[inline, bg.white]}>
        <Text style={[text.h1, text.gray600]}>포스트</Text>
      </View>

      <View
        style={{
          height: 2000,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Review</Text>
        <Button
          title="AddReview"
          onPress={() => navigation.navigate("AddReview")}
        />
      </View>
    </Animated.ScrollView>
  );
};
