import React, { useState } from "react";
import { Animated, Text, View } from "react-native";

import { Tabs } from "@/components";
import { useScrollHeader } from "@/hooks/useScrollHeader";
import { HomeTabScreenProps } from "@/navigation/types";
import { bg, padding, safe, text } from "@/styles";

import { CommunityTab } from "./CommunityTab";
import { MyTab } from "./MyTab";

const tabs = ["나의 기록", "커뮤니티"] as const;

export const Posts: React.FC<HomeTabScreenProps<"Posts">> = ({
  navigation,
}) => {
  const scroll = useScrollHeader();

  const [tab, setTab] = useState<(typeof tabs)[number]>(tabs[0]);

  return (
    <Animated.ScrollView
      style={bg.gray50}
      contentContainerStyle={{ flexGrow: 1 }}
      {...scroll}
      stickyHeaderIndices={[1]}
      bounces={false}
    >
      <View
        style={[
          padding.bottom(10),
          padding.horizontal(safe.horizontal),
          bg.white,
        ]}
      >
        <Text style={[text.h1, text.gray600]}>포스트</Text>
      </View>
      <Tabs tabs={tabs} selected={tab} setSelected={setTab} />
      {tab === "나의 기록" ? <MyTab /> : <CommunityTab />}
    </Animated.ScrollView>
  );
};
