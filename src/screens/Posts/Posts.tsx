import React, { useEffect, useRef } from "react";
import {
  Button,
  Text,
  View,
  ScrollView,
  Animated,
  Dimensions,
  useWindowDimensions,
} from "react-native";

import { bg, inline, text } from "@/styles";
import { HomeTabScreenProps } from "@/navigation/types";
import { TabView, SceneMap } from "react-native-tab-view";

const FirstRoute = () => (
  <ScrollView style={{ backgroundColor: "#ff4081" }}>
    {/* 첫 번째 탭의 컨텐츠 */}
    <Text>TAB 1</Text>
  </ScrollView>
);

const SecondRoute = () => (
  <ScrollView style={{ backgroundColor: "#673ab7" }}>
    {/* 두 번째 탭의 컨텐츠 */}
    <Text>TAB 2</Text>
  </ScrollView>
);

export const Posts: React.FC<HomeTabScreenProps<"Posts">> = ({
  navigation,
}) => {
  const yOffset = useRef(new Animated.Value(0)).current;
  const headerOpacity = yOffset.interpolate({
    inputRange: [0, 50],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });

  useEffect(() => {
    navigation.setOptions({
      headerStyle: {
        opacity: headerOpacity,
      },
    });
  }, [headerOpacity, navigation]);

  const fullHeight = Dimensions.get("window").height;

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "First" },
    { key: "second", title: "Second" },
  ]);

  const initialLayout = { width: Dimensions.get("window").width };

  // useEffect(() => {
  //   console.log(showHeader);
  // }, [showHeader.show]);

  return (
    <View style={{ flex: 1 }}>
      <Animated.ScrollView
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
          { useNativeDriver: false },
        )}
        scrollEventThrottle={16}
      >
        <View
          style={[
            {
              height: fullHeight,
              position: "absolute",
              top: fullHeight,
              left: 0,
              right: 0,
            },
            bg.gray600,
          ]}
        />
        <View style={[inline]}>
          <Text style={[text.h1, text.gray600]}>포스트</Text>
        </View>
        {/* <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={initialLayout}
          style={{ height: fullHeight }}
        /> */}
      </Animated.ScrollView>
    </View>
  );
};
