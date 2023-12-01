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
import type { Post } from "@/types/post";
import { formatDate } from "@/utils/format";

export const PostItem: React.FC<{
  idx: number;
  post: Post;
  onPress: () => void;
}> = ({ idx, post, onPress }) => {
  return (
    <View style={[row, gap(12)]}>
      <View style={[center, round.full, w(42), h(42), bg.gray50]}>
        <Text style={[text.body2, text.gray600]}>{idx}</Text>
      </View>
      <View style={[fill, gap(12)]}>
        <View style={gap(4)}>
          <Text style={[margin.top(4), text.sub2, text.gray600]}>
            {post.name}
          </Text>
          <Text style={[text.body2, text.gray400]}>
            {post.intake}g ∙ {formatDate(post.createdAt)}
          </Text>
        </View>
        <Clickable
          viewStyle={[
            round.md,
            post.content === null ? bg.primaryTransLight : bg.gray100,
          ]}
          onPress={onPress}
        >
          <View
            style={[
              justify.center,
              post.content === null ? align.center : align.start,
              h(40),
              padding.horizontal(16),
            ]}
          >
            <Text
              style={[
                text.btn2,
                post.content === null ? text.primary : text.gray500,
                { textAlign: post.content === null ? "center" : "left" },
              ]}
              numberOfLines={1}
            >
              {post.content ?? "포스트 남기기"}
            </Text>
          </View>
        </Clickable>
      </View>
    </View>
  );
};
