import React, { useState } from "react";
import { ScrollView, Text, TextInput, View } from "react-native";

import { Button, Clickable } from "@/components";
import { useKeyboardVisibile, useTags } from "@/hooks";
import { RootStackScreenProps } from "@/navigation/types";
import {
  bg,
  center,
  colors,
  fill,
  gap,
  h,
  margin,
  padding,
  round,
  row,
  safe,
  text,
} from "@/styles";
import { formatDate } from "@/utils/format";
import { useQueryClient } from "@tanstack/react-query";

export const AddPost: React.FC<RootStackScreenProps<"AddPost">> = ({
  navigation,
  route: {
    params: { post },
  },
}) => {
  const isKeyboardVisible = useKeyboardVisibile();
  const { data: allTags } = useTags();

  const queryClient = useQueryClient();

  return (
    <View style={fill}>
      <ScrollView>
        <View style={padding.horizontal(safe.horizontal)}>
          <View style={[gap(8), margin.bottom(32), padding.top(24)]}>
            <Text style={[text.h2, text.gray600]}>{post.name}</Text>
            <Text style={[text.body1, text.gray400]}>
              {post.intake}g ∙ {formatDate(post.createdAt)}
            </Text>
          </View>
          <TextInput
            style={[
              margin.bottom(40),
              round.md,
              h(180),
              padding.vertical(18),
              padding.horizontal(16),
              bg.gray50,
              text.body1,
              text.gray600,
            ]}
            placeholderTextColor={colors.gray300}
            placeholder="200자까지 쓸 수 있어요"
            textAlignVertical="top"
            maxLength={200}
            multiline
          />
          <View style={[gap(8), margin.bottom(12)]}>
            <Text style={[text.h3, text.gray600]}>태그 선택하기</Text>
            <Text style={[text.body1, text.gray300]}>
              음식이 어땠는지 골라주세요
            </Text>
          </View>
          <View
            style={[
              row,
              gap(12),
              {
                flexWrap: "wrap",
              },
            ]}
          >
            {allTags?.map(({ id, name, colorBackground: color }) => (
              <ClickableTag key={id} name={name} color={color} />
            ))}
          </View>
        </View>
      </ScrollView>
      <Button
        title="저장"
        onPress={async () => {
          await queryClient.invalidateQueries({
            queryKey: ["postDate"],
          });
          navigation.navigate("HomeTab", { screen: "Posts" });
        }}
        variant="primary"
        stick={isKeyboardVisible ? "keyboard" : "bottom"}
      />
    </View>
  );
};

const ClickableTag: React.FC<{ name: string; color: string }> = ({
  name,
  color: activeColor,
}) => {
  const [selected, setSelected] = useState(false);

  const color = selected ? activeColor : colors.gray300;

  return (
    <Clickable
      viewStyle={round.md}
      onPress={() => setSelected(selected => !selected)}
    >
      <View
        style={[
          center,
          h(33),
          padding.horizontal(15),
          { backgroundColor: color + "33" },
        ]}
      >
        <Text style={[text.sub1, { color }]}>{name}</Text>
      </View>
    </Clickable>
  );
};
