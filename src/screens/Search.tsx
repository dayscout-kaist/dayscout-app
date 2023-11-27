import React, { useEffect } from "react";
import { ScrollView, View, TextInput, Text } from "react-native";
import {
  h,
  bg,
  padding,
  gap,
  row,
  text,
  safe,
  margin,
  colors,
  fill,
  round,
  inline,
  align,
} from "@/styles";
import { Tag, TagTitle } from "@/components";
import { HeaderBackImage } from "@/navigation/Header";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Icon } from "@/icons";
import { FoodSearchItem } from "@/components/FoodSearchItem";
import { HomeTabParamList, HomeTabScreenProps } from "@/navigation/types";
import { useTextInput } from "@/hooks";
import { useFoodSearch } from "@/hooks/useFoodSearch";

// Dummy data for the list items
const searchResults = [
  {
    id: 100581350,
    name: "데자와 로얄 밀크티 500ml",
    imageSrc:
      // "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D",
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
      // "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D",
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

const staticTags: TagTitle[] = ["추정치", "혈당 스파이크"];

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
              tags={staticTags}
              name={food.name}
              category={food.content?.className || ""}
            />
          ))}
      </ScrollView>
    </View>
  );
};
