import React from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Notice } from "@/components";
import { fill, margin } from "@/styles";

export const CommunityTab: React.FC = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[fill, margin.bottom(60 + insets.bottom)]}>
      <Notice icon="🚧" msg="준비 중인 기능이에요!" />
    </View>
  );
};
