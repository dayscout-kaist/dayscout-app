import React from "react";
import { Text, View } from "react-native";

import { Clickable } from "@/components";
import {
  align,
  bg,
  center,
  fill,
  gap,
  h,
  justify,
  margin,
  padding,
  round,
  row,
  text,
  w,
} from "@/styles";
import { formatDate } from "@/utils/format";

export const PostItem: React.FC<{
  idx: number;
  name: string;
  intake: number;
  date: string;
  msg: string | null;
  onPress: () => void;
}> = ({ idx, name, intake, date, msg, onPress }) => {
  return (
    <View style={[row, gap(12)]}>
      <View style={[center, round.full, w(42), h(42), bg.gray50]}>
        <Text style={[text.body2, text.gray600]}>{idx}</Text>
      </View>
      <View style={[fill, gap(12)]}>
        <View style={gap(4)}>
          <Text style={[margin.top(4), text.sub2, text.gray600]}>{name}</Text>
          <Text style={[text.body2, text.gray400]}>
            {intake}g ∙ {formatDate(date)}
          </Text>
        </View>
        <Clickable
          viewStyle={[round.md]}
          initialBg={msg === null ? bg.primaryTransLight : bg.gray100}
          whileTapBg={msg === null ? bg.primaryTrans : bg.gray200}
          onPress={onPress}
        >
          <View
            style={[
              justify.center,
              msg === null ? align.center : align.start,
              h(40),
              padding.horizontal(16),
            ]}
          >
            <Text
              style={[
                text.btn2,
                msg === null ? text.primary : text.gray500,
                { textAlign: msg === null ? "center" : "left" },
              ]}
              numberOfLines={1}
            >
              {msg ?? "포스트 남기기"}
            </Text>
          </View>
        </Clickable>
      </View>
    </View>
  );
};
