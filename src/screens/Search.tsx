import React from 'react';
import { ScrollView, Text, TouchableOpacity, View, TextInput, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { bg, padding, gap, row, text, safe, margin, colors } from '@/styles';
import { Tag } from "@/components";
import { HeaderBackImage } from '@/navigation/Header';

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

const staticTags = [
  { title: "추정치", bg: "#ffe5c3", txt: "#ff980f" },
  { title: "1,000회 이상 추가됨", bg: "#fdbec1", txt: "#eb2a2a" },
];

export const Search: React.FC = () => {
  const navigation = useNavigation();

  const BackButton = HeaderBackImage(colors.gray500);

  const Header = () => (
    <View style={[row, margin.top(48),margin.bottom(15), {alignItems: 'center', justifyContent: 'space-between'}]}>
      <TouchableOpacity style={[margin.left(3)]} onPress={() => navigation.goBack()}>
        <BackButton tintColor={colors.gray500} />
      </TouchableOpacity>
      <TextInput
        autoFocus={true}
        style={[padding.horizontal(16), padding.vertical(15), margin.horizontal(10), margin.right(15), bg.gray100, { flex:1, borderRadius: 20 }]}
        placeholder="Search for food"
      />
    </View>
  );

  return (
    <View style={[bg.white, { flex: 1 }]}>
      <Header/>
      <ScrollView style={[padding.horizontal(safe.horizontal)]}>
        {searchResults.map((item, index) => (
          <TouchableOpacity
            key={`search-item-${index}`}
            style={[bg.white, padding.vertical(12), row, gap(8), { alignItems: 'center' }]}
            onPress={() => navigation.navigate('FoodDetail', { item })}
          >
            <Image
              style={{ width: 48, height: 48, borderRadius: 12 }}
              source={{
                uri: item.imageSrc,
              }}
            />
            <View style={[gap(8), { flex: 1 }]}>
              <View style={[row, gap(8)]}>
                {staticTags.map(({ title, bg, txt }) => (
                  <Tag key={title} bgClr={bg} txtClr={txt}>
                    {title}
                  </Tag>
                ))}
              </View>
              <View style={[row,gap(8),{alignItems: 'center'}]}>
                <Text style={[text.body1]}>{item.displayName}</Text>
                <Text style={[text.body2, text.gray400]}>{item.smallCategory}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};
