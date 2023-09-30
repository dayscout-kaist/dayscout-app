import React from "react";
import { Button, Text, View } from "react-native";

import { HomeTabScreenProps } from "@/navigation/types";

export const Home: React.FC<HomeTabScreenProps<"Home">> = ({navigation}) => {


  return (
    <View>
      <Text>Home</Text>
      <Button title="Image Search" onPress={() => navigation.push("ImageSearch")}/>
      <Button title="Text Search" onPress={() => navigation.push("TextSearch")}/>
    </View>
  );
};
