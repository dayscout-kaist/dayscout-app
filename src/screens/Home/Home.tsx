import React from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Icon } from "@/icons";
import {
  bg,
  colors,
  column,
  margin,
  padding,
  row,
  safe,
  text,
  gap,
  align,
  justify,
  round,
  fill,
  h,
} from "@/styles";
import type { ProductWithDetails } from "@/types/product";

import { HomeTabScreenProps } from "@/navigation/types";
import { ActionCard } from "@/screens/Home/ActionCard";
import { StatusBar } from "expo-status-bar";
import { Clickable, Notice } from "@/components";
import { useUserInfo } from "@/hooks/useUserInfo";
import { PostItem } from "@/screens/Posts/PostItem";
import { usePosts } from "@/hooks";
import { formatDate8Digits } from "@/utils/format";

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
export const Home: React.FC<HomeTabScreenProps<"Home">> = ({ navigation }) => {
  const { data: userInfo } = useUserInfo();
  const { data: posts } = usePosts(
    formatDate8Digits(new Date(new Date().setHours(0, 0, 0, 0))),
  );

  return (
    <ScrollView
      style={[column, bg.gray50, padding.horizontal(safe.horizontal), gap(16)]}
    >
      <StatusBar />
      <View style={[padding.vertical(36)]}>
        <Text style={[text.gray600, text.h2, { lineHeight: 26 * 1.4 }]}>
          <Text style={text.primary}>{userInfo?.username}</Text> 님 안녕하세요
          👋
          {"\n"}오늘은 어떤 음식을 드셨나요?
        </Text>
      </View>

      <Clickable
        viewStyle={round.lg}
        onPress={() => navigation.navigate("HomeTab", { screen: "Search" })}
        noShrink
      >
        <View
          style={[
            bg.gray100,
            fill,
            h(46),
            row,
            align.center,
            padding.horizontal(12),
            gap(12),
          ]}
        >
          <Icon.search width={20} height={20} fill={colors.gray400} />
          <Text style={[text.body1, text.gray400]}>
            음식 영양성분을 검색해보세요
          </Text>
        </View>
      </Clickable>

      <View style={[row, gap(18), padding.top(16)]}>
        <ActionCard
          sub="유통 식품"
          title={"바코드로\n찾아보기"}
          icon="📷"
          onPress={() => navigation.navigate("BarcodeSearch")}
        />
        <ActionCard sub="먹은 음식" title={"직접\n입력하기"} icon="🍔" />
      </View>
      <View style={[margin.top(24)]}>
        <Text style={[text.h3, text.gray600, margin.bottom(12)]}>
          오늘 먹은 음식
        </Text>

        <View
          style={[
            bg.white,
            round.lg,
            padding.vertical(24),
            padding.horizontal(18),
            gap(8),
          ]}
        >
          {posts && posts?.length > 0 ? (
            posts.map((el, idx) => (
              <PostItem
                key={idx}
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
    </ScrollView>
  );
};
