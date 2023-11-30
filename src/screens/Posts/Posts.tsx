import React, { useEffect, useRef } from "react";
import {
  Text,
  View,
  Animated,
  Dimensions,
  Image,
  ScrollView,
} from "react-native";

import {
  bg,
  fill,
  gap,
  inline,
  margin,
  padding,
  row,
  safe,
  text,
} from "@/styles";
import { HomeTabScreenProps } from "@/navigation/types";
import { Tag } from "@/components";
import { ActionBox } from "@/components";
import { useScrollHeader } from "@/hooks/useScrollHeader";

// 예시로 사용할 임시 데이터
const postsData = [
  {
    id: 1,
    time: "20:00",
    displayName: "식품 이름이 상당히 긴게 많군요",
    imageSrc:
      "https://sparcs-newara-dev.s3.amazonaws.com/files/snowsuno-in-90s.png",
    smallCategory: "분류",
  },
  {
    id: 2,
    time: "20:00",
    displayName: "식품 이름이 상당히 긴게 많군요",
    imageSrc:
      "https://sparcs-newara-dev.s3.amazonaws.com/files/snowsuno-in-90s.png",
    smallCategory: "분류",
  },
  // ... 더 많은 포스트 데이터
];

const staticTags = [{ title: "추정치", bg: "#ffe5c3", txt: "#ff980f" }];

export const Posts: React.FC<HomeTabScreenProps<"Posts">> = ({
  navigation,
}) => {
  const scroll = useScrollHeader();
  const { height: fullHeight } = Dimensions.get("window");

  const dates = ["12", "13", "14", "15", "16", "17", "18"];

  return (
    <Animated.ScrollView style={[bg.gray50, fill]} {...scroll}>
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
      <View style={[inline]}>
        <View>
          <Text>대충 플러스 버튼</Text>
        </View>
        <Text style={[text.h1, text.gray600]}>포스트</Text>
      </View>
      <View style={bg.gray50}>
        <View
          style={[
            row,
            bg.white,
            gap(8),
            padding.horizontal(safe.horizontal),
            padding.vertical(12),
          ]}
        >
          {dates.map(date => (
            <View
              key={date}
              style={[
                bg.primary,
                {
                  alignItems: "center",
                  justifyContent: "center",
                  width: 40,
                  height: 40,
                  borderRadius: 11,
                },
              ]}
            >
              <Text style={[text.body2, { color: "white" }]}>{date}</Text>
            </View>
          ))}
        </View>
        <ActionBox
          icon="🍞"
          main="더 먹은 음식이 있나요?"
          desc="먹은 음식 추가하기"
          onPress={() => {}}
        />
        <ScrollView
          style={[
            margin.top(18),
            bg.white,
            padding.horizontal(safe.horizontal),
          ]}
        >
          {postsData.map((item, index) => (
            <View style={[gap(4), padding.vertical(6)]}>
              <Text style={[text.body2]}>{item.time}</Text>
              <View
                key={`search-item-${index}`}
                style={[row, gap(8), { alignItems: "center" }]}
              >
                <Image
                  style={{ width: 56, height: 56, borderRadius: 12 }}
                  source={{
                    uri: item.imageSrc,
                  }}
                />
                <View style={[gap(6), { flex: 1 }]}>
                  <View style={[row, gap(8)]}>
                    {staticTags.map(({ title, bg, txt }) => (
                      <Tag key={title} name={title} bgColor={bg} color={txt} />
                    ))}
                  </View>
                  <View style={[row, gap(8), { alignItems: "center" }]}>
                    <Text style={[text.body1]}>{item.displayName}</Text>
                    <Text style={[text.body2, text.gray400]}>
                      {item.smallCategory}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </Animated.ScrollView>
  );
};
