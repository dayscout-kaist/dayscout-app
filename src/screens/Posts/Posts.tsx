import React, { useState } from "react";
import { Text, View } from "react-native";

import { ScreenBackground, Tabs } from "@/components";
import { HomeTabScreenProps } from "@/navigation/types";
import { bg, padding, safe, text } from "@/styles";

import { MyTab } from "./MyTab";

const tabs = ["나의 기록", "커뮤니티"] as const;

export const Posts: React.FC<HomeTabScreenProps<"Posts">> = ({
  navigation,
}) => {
  const [tab, setTab] = useState<(typeof tabs)[number]>(tabs[0]);

  return (
    <ScreenBackground>
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
      {tab === "나의 기록" ? <MyTab /> : <View></View>}
    </ScreenBackground>
  );
};
