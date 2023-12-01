import React, { useState } from "react";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useNavigation } from "@react-navigation/native";

import { ActionBox, Clickable, Notice } from "@/components";
import { useCurrentWeek, usePosts } from "@/hooks";
import {
  bg,
  center,
  fill,
  gap,
  h,
  inline,
  margin,
  padding,
  round,
  row,
  safe,
  text,
} from "@/styles";
import { formatDate8Digits } from "@/utils/format";

import { PostItem } from "./PostItem";

export const MyTab: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(
    new Date(new Date().setHours(0, 0, 0, 0)),
  );

  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const { today, weekdays } = useCurrentWeek();

  const { data: posts } = usePosts(formatDate8Digits(selectedDate));

  return (
    <View style={fill}>
      <View
        style={[
          row,
          gap(8),
          padding.top(22),
          padding.bottom(12),
          padding.horizontal(safe.horizontal),
          bg.white,
        ]}
      >
        {weekdays.map(date => (
          <Clickable
            key={date.getTime()}
            style={[fill]}
            viewStyle={[round.md]}
            onPress={() => setSelectedDate(date)}
          >
            <View
              style={[
                fill,
                center,
                h(40),
                date.getTime() === selectedDate.getTime()
                  ? bg.primary
                  : bg.gray50,
              ]}
            >
              <Text
                style={[
                  text.sub2,
                  formatDate8Digits(selectedDate) === formatDate8Digits(date)
                    ? text.white
                    : date > today
                      ? text.gray300
                      : text.gray500,
                ]}
              >
                {date.getDate()}
              </Text>
            </View>
          </Clickable>
        ))}
      </View>
      <View style={[fill, margin.bottom(60 + insets.bottom)]}>
        <View style={[gap(16)]}>
          <View style={[bg.white, inline]}>
            <ActionBox
              icon="🍞"
              main="더 먹은 음식이 있나요?"
              desc="먹은 음식 추가하기"
              onPress={() => navigation.navigate("AddReview")}
            />
          </View>
          <View
            style={[
              gap(16),
              padding.vertical(16),
              padding.horizontal(safe.horizontal),
              bg.white,
            ]}
          >
            {posts && posts?.length > 0 ? (
              posts.map((el, idx) => (
                <PostItem
                  key={el.id}
                  idx={idx + 1}
                  post={el}
                  onPress={() => {
                    navigation.navigate("AddPost", { post: el });
                  }}
                />
              ))
            ) : (
              <Notice icon="🔎" msg="오늘의 첫 음식을 기록해 보세요!" />
            )}
          </View>
        </View>
      </View>
    </View>
  );
};
