import React from "react";
import { Image, Text, View } from "react-native";

import { Button } from "@/components";
import { useAuthToken } from "@/hooks";
import { center, fill, gap, safe, text } from "@/styles";
import { AuthStackScreenProps, RootStackScreenProps } from "@/navigation/types";

export const Landing: React.FC<AuthStackScreenProps<"Landing">> = ({
  navigation,
}) => {
  const { saveToken } = useAuthToken();

  return (
    <View style={[fill, center]}>
      {/* TDOO: Update logo path and the file */}
      <Image source={require("@/../assets/blobowo.png")} />
      <Text style={[text.h1, text.primary]}>DayScout</Text>
      <View
        style={[
          gap(12),
          {
            position: "absolute",
            bottom: safe.bottom,
            left: safe.horizontal,
            right: safe.horizontal,
          },
        ]}
      >
        <Button
          title="로그인"
          onPress={() => {
            // TODO: Call API to login
            saveToken("TmpToken");
          }}
          style="primary"
        />
        <Button
          title="회원가입"
          onPress={() => navigation.navigate("EmailPwd")}
          style="secondary"
        />
      </View>
    </View>
  );
};
