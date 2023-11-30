import React from "react";
import { ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useNavigation } from "@react-navigation/native";

import { ActionBox } from "@/components";
import { useCurrentWeek } from "@/hooks";
import {
  bg,
  center,
  fill,
  gap,
  h,
  margin,
  padding,
  round,
  row,
  safe,
  text,
} from "@/styles";

import { PostItem } from "./PostItem";

const data = [
  {
    name: "데자와",
    intake: 100,
    date: "2023-11-30T16:48:47.984017+09:00",
    img: "https://sparcs-newara-dev.s3.amazonaws.com/files/NewAra_Channeltalk.jpg",
    msg: null,
  },
  {
    name: "초코파이",
    intake: 240,
    date: "2023-11-30T09:09:47.984017+09:00",
    img: "https://sparcs-newara-dev.s3.amazonaws.com/files/NewAra_Channeltalk.jpg",
    msg: "짧은 포스트 메시지",
  },
  {
    name: "견과류",
    intake: 30,
    date: "2023-11-30T00:49:47.984017+09:00",
    img: "https://sparcs-newara-dev.s3.amazonaws.com/files/NewAra_Channeltalk.jpg",
    msg: "길고 길다란 길고 길다란 길고 길다란 포스트 메시지",
  },
  {
    name: "데자와",
    intake: 100,
    date: "2023-11-30T16:48:47.984017+09:00",
    img: "https://sparcs-newara-dev.s3.amazonaws.com/files/NewAra_Channeltalk.jpg",
    msg: null,
  },
  {
    name: "초코파이",
    intake: 240,
    date: "2023-11-30T09:09:47.984017+09:00",
    img: "https://sparcs-newara-dev.s3.amazonaws.com/files/NewAra_Channeltalk.jpg",
    msg: "짧은 포스트 메시지",
  },
  {
    name: "견과류",
    intake: 30,
    date: "2023-11-30T00:49:47.984017+09:00",
    img: "https://sparcs-newara-dev.s3.amazonaws.com/files/NewAra_Channeltalk.jpg",
    msg: "길고 길다란 길고 길다란 길고 길다란 포스트 메시지",
  },
];

export const MyTab: React.FC = () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const { today, weekdays } = useCurrentWeek();

  return (
    <View style={[fill]}>
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
          <View
            key={date.getTime()}
            style={[
              fill,
              center,
              round.md,
              h(40),
              date.getTime() === today.getTime() ? bg.primary : bg.gray50,
            ]}
          >
            <Text
              style={[
                text.sub2,
                date < today
                  ? text.gray500
                  : date > today
                    ? text.gray300
                    : text.white,
              ]}
            >
              {date.getDate()}
            </Text>
          </View>
        ))}
      </View>
      <View style={[fill, margin.bottom(60 + insets.bottom)]}>
        <ScrollView>
          <View style={gap(16)}>
            <View style={bg.white}>
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
              {data.map((el, idx) => (
                <PostItem key={idx} idx={idx + 1} {...el} onPress={() => {}} />
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
