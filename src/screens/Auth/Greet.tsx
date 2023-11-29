import React from "react";
import { Text, View } from "react-native";

import { Button } from "@/components";
import type { AuthStackScreenProps } from "@/navigation/types";
import { center, fill, text } from "@/styles";

export const Greet: React.FC<AuthStackScreenProps<"Greet">> = ({
  route: { params: navParam },
}) => (
  <View style={[fill, center]}>
    <Text style={[text.h1, text.gray600]}>환영합니다!</Text>
    <Button
      title="시작하기"
      onPress={() => {}}
      style="primary"
      stick="bottom"
    />
  </View>
);
