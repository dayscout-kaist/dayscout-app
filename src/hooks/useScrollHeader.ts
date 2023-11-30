import { useEffect, useRef } from "react";
import { Animated } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const useScrollHeader = () => {
  const yOffset = useRef(new Animated.Value(0)).current;
  const headerOpacity = yOffset.interpolate({
    inputRange: [0, 50],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerTitleStyle: {
        opacity: headerOpacity,
      },
    });
  }, [headerOpacity, navigation]);

  return {
    onScroll: Animated.event(
      [{ nativeEvent: { contentOffset: { y: yOffset } } }],
      { useNativeDriver: true },
    ),
    scrollEventThrottle: 16,
  };
};
