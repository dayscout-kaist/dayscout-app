import React from "react";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { bg, center, fill, h, justify, margin, text } from "@/styles";
import { TossFace } from "@/utils/TossFace";

export const CommunityTab: React.FC = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[fill, center, margin.bottom(60 + insets.bottom), bg.white]}>
      <View style={[justify.center, h(128)]}>
        <TossFace icon="🚧" size={64} />
      </View>
      <Text style={[text.sub2, text.gray400]}>준비 중인 기능이에요!</Text>
    </View>
  );
};
