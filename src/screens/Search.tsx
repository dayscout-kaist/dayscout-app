import React, { useEffect } from "react";
import { ScrollView, View, TextInput, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { FoodSearchItem } from "@/components";
import { useFoodSearch, useTextInput } from "@/hooks";
import { Icon } from "@/icons";
import { HomeTabScreenProps } from "@/navigation/types";
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
} from "@/styles";

// Dummy data for the list items
const searchResults = [
  {
    id: 100581350,
    name: "데자와 로얄 밀크티 500ml",
    imageSrc:
      "https://sparcs-newara-dev.s3.amazonaws.com/files/snowsuno-in-90s.png",
    barcodeNumber: 8801097481206,
    largeCategory: "가공식품",
    mediumCategory: "차류",
    smallCategory: "차음료",
    xSmallCategory: "기타차음료",
    displayName: "데자와 로얄 밀크티",
    nutrients: {
      carbohydrate: 19,
      protein: 1,
      fat: 1.5,
      sugar: 17,
      energy: 95,
    },
    totalWeight: 500,
  },
  {
    id: 100581350,
    name: "데자와 로얄 밀크티 500ml",
    imageSrc:
      "https://sparcs-newara-dev.s3.amazonaws.com/files/snowsuno-in-90s.png",
    barcodeNumber: 8801097481206,
    largeCategory: "가공식품",
    mediumCategory: "차류",
    smallCategory: "차음료",
    xSmallCategory: "기타차음료",
    displayName: "데자와 로얄 밀크티",
    nutrients: {
      carbohydrate: 19,
      protein: 1,
      fat: 1.5,
      sugar: 17,
      energy: 95,
    },
    totalWeight: 500,
  },
  // Add more items here...
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
        margin.bottom(15),
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

  const { data, error, isLoading } = useFoodSearch(searchQuery.value);

  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <View style={[bg.white, fill]}>
      <SearchBarHeader input={searchQuery} />
      <ScrollView style={[padding.horizontal(12)]}>
        {error && <Text>{error.name}</Text>}
        {isLoading && <Text>Loading</Text>}
        {data &&
          data.map(food => (
            <FoodSearchItem
              key={food.id}
              onPress={() =>
                navigation.navigate("FoodDetail", { foodId: food.id })
              }
              imageSrc={food.imageSrc || ""}
              tags={[]}
              name={food.name}
              category={food.content?.className || ""}
            />
          ))}
      </ScrollView>
    </View>
  );
};
