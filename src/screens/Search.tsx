import React, { useEffect, useRef } from "react";
import { ScrollView, View, TextInput, Text } from "react-native";
import {
  h,
  bg,
  padding,
  gap,
  row,
  text,
  margin,
  colors,
  fill,
  round,
  inline,
  align,
  safe,
} from "@/styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Icon } from "@/icons";
import { FoodSearchItem } from "@/components/FoodSearchItem";
import { HomeTabScreenProps } from "@/navigation/types";
import { useTextInput } from "@/hooks";
import { useFoodSearch } from "@/hooks/useFoodSearch";
import { TagInfo } from "@/types/food";
import { ActionBox, Notice } from "@/components";

const staticTags: TagInfo[] = [
  { id: 0, name: "추정치" },
  { id: 1, name: "1,000회 이상 추가됨" },
];

const SearchBarHeader: React.FC<{
  input: { value: string; onChangeText: (text: string) => void };
}> = ({ input }) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        row,
        inline,
        margin.top(insets.top),
        { alignItems: "center", justifyContent: "space-between" },
      ]}
    >
      <View
        style={[
          bg.gray100,
          fill,
          round.md,
          row,
          align.center,
          h(42),
          gap(12),
          padding.horizontal(14),
        ]}
      >
        <Icon.search fill={colors.gray400} width={20} height={20} />
        <TextInput
          autoFocus={true}
          placeholder="찾고 싶은 음식을 검색하세요"
          style={[
            text.body2,
            text.gray600,
            fill,
            { lineHeight: 20 /* temp fix */ },
          ]}
          {...input}
        />
      </View>
    </View>
  );
};

export const Search: React.FC<HomeTabScreenProps<"Search">> = ({
  navigation,
}) => {
  const searchQuery = useTextInput();
  const insets = useSafeAreaInsets();

  const { data, error, isLoading, isFetching } = useFoodSearch(
    searchQuery.value,
  );

  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <View style={[bg.white, fill]}>
      <SearchBarHeader input={searchQuery} />
      {!isLoading && !data && !error && (
        <ActionBox
          main="바코드가 있는 식품이라면"
          desc="카메라로 스캔하기"
          icon="📷"
          onPress={() => {}}
        />
      )}
      <ScrollView
        contentContainerStyle={[fill, padding.bottom(60 + insets.bottom)]}
        style={[padding.horizontal(12), margin.top(15)]}
      >
        {error && <Notice icon="🔍" msg="음식을 찾을 수 없어요" />}
        {isLoading && <FoodSearchItem.Skeleton />}
        {data &&
          data.map(food => (
            <FoodSearchItem
              key={food.id}
              onPress={() =>
                navigation.navigate("FoodDetail", { foodId: food.id })
              }
              imageSrc={food.imageSrc}
              tags={staticTags}
              name={food.name}
              category={food.content?.className || ""}
            />
          ))}
      </ScrollView>
    </View>
  );
};
