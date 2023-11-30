import React from "react";
import { Text, View } from "react-native";

import { register } from "@/api/auth";
import { Button } from "@/components";
import { useAuthToken } from "@/hooks";
import type { AuthStackScreenProps } from "@/navigation/types";
import { center, fill, text } from "@/styles";

export const Greet: React.FC<AuthStackScreenProps<"Greet">> = ({
  route: { params: navParam },
}) => {
  const { saveToken } = useAuthToken();

  return (
    <View style={[fill, center]}>
      <Text style={[text.h1, text.gray600]}>환영합니다!</Text>
      <Button
        title="시작하기"
        onPress={async () => {
          const user = await register(navParam);
          saveToken(user.token);
        }}
        variant="primary"
        stick="bottom"
      />
    </View>
  );
};
