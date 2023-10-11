import type { RootStackScreenProps } from "@/navigation/types";
import { FoodInfo } from "@/types/food";
import React, { useEffect, useState } from "react";
import { View, TextInput, Button, FlatList, Keyboard } from "react-native";
import { ListItem } from "react-native-elements";
import axios from "axios";
import { bg, text } from "@/styles";
import { searchByText } from "@/api";

export const TextSearch: React.FC<RootStackScreenProps<"TextSearch">> = ({
  navigation,
  route: { params },
}) => {
  const [searchText, setSearchText] = useState(params?.query ?? "");
  const [results, setResults] = useState<FoodInfo[]>([]);

  const handleSearch = async () => {
    Keyboard.dismiss();

    try {
      const foodInfos = await searchByText(searchText);
      setResults(foodInfos);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (params?.query) handleSearch().catch(console.error);
  }, []);

  return (
    <View style={[bg.white, { flex: 1 }]}>
      <View style={{ flexDirection: "row", padding: 10, alignItems: "center" }}>
        <TextInput
          value={searchText}
          onChangeText={setSearchText}
          placeholder="Enter search text"
          returnKeyType="done"
          onSubmitEditing={handleSearch}
          style={[
            {
              flex: 1,
              borderColor: "gray",
              padding: 10,
              borderWidth: 1,
              borderRadius: 5,
              height: 40,
              marginVertical: 5,
              marginRight: 1,
            },
          ]}
        />
        <Button title="Search" onPress={handleSearch} />
      </View>

      <FlatList
        data={results}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item: result }) => (
          <ListItem
            onPress={() =>
              navigation.navigate("FoodInfo", result)
            }
            style={{ borderColor: "black", borderBottomWidth: 1 }}
          >
            <ListItem.Content>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <ListItem.Title style={[text.body]}>
                  {result.name}
                </ListItem.Title>
                <View style={[bg.white, { flex: 1 }]}></View>
                <ListItem.Subtitle style={[text.body]}>
                  {result.category}
                </ListItem.Subtitle>
              </View>
              <ListItem.Subtitle style={[text.caption1]}>
                {result.manufacturer} | {result.content.totalWeight}{" "}
                {result.content.primaryUnit}
              </ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        )}
      />
    </View>
  );
};
