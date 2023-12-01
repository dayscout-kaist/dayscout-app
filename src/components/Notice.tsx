import React from "react";
import { Text, View } from "react-native";

import { bg, center, fill, h, justify, text } from "@/styles";
import { TossFace } from "@/utils/TossFace";

export const Notice: React.FC<{ icon: string; msg: string }> = ({
  icon,
  msg,
}) => (
  <View style={[fill, center, bg.white]}>
    <View style={[justify.center, h(128)]}>
      <TossFace icon={icon} size={64} />
    </View>
    <Text style={[text.sub2, text.gray400]}>{msg}</Text>
  </View>
);
