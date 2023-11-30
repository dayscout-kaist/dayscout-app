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

export const Posts: React.FC<HomeTabScreenProps<"Posts">> = ({
  navigation,
}) => {
  const yOffset = useRef(new Animated.Value(0)).current;
  const headerOpacity = yOffset.interpolate({
    inputRange: [0, 50],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });

  const fullHeight = Dimensions.get("window").height;

  useEffect(() => {
    navigation.setOptions({
      headerStyle: {
        opacity: headerOpacity,
      },
    });
  }, [headerOpacity, navigation]);

  return (
    <Animated.ScrollView // TODO: Componentize
      onScroll={Animated.event(
        [
          {
            nativeEvent: {
              contentOffset: {
                y: yOffset,
              },
            },
          },
        ],
        { useNativeDriver: true },
      )}
      scrollEventThrottle={16}
      style={[bg.gray50, fill]}
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
