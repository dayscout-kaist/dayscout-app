import React, { useEffect } from "react";
import { Button, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RootStackScreenProps } from "@/navigation/types";
import { useFoodPosts } from "@/hooks";

import MockPosts from "@/icons/mock.svg";
import { bg, fill } from "@/styles";

export const FoodReview: React.FC<RootStackScreenProps<"FoodReview">> = ({
  navigation,
  route: {
    params: { foodId, foodName },
  },
}) => {
  useEffect(() => {
    navigation.setOptions({
      title: foodName,
    });
  }, [foodName]);

  const { data: posts } = useFoodPosts(foodId);

  return (
    <View style={[fill, bg.gray50]}>
      <MockPosts />
    </View>
  );
};
