import React from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Icon } from "@/icons";
import {
  bg,
  colors,
  column,
  margin,
  padding,
  row,
  safe,
  text,
  gap,
  align,
  justify,
  round,
  fill,
  h,
} from "@/styles";
import type { ProductWithDetails } from "@/types/product";

import { FreqFood } from "./FreqFood";
import { HomeTabScreenProps } from "@/navigation/types";
import { Clickable } from "@/components";

export const Home: React.FC<HomeTabScreenProps<"Home">> = ({ navigation }) => {
  const data: ProductWithDetails = {
    id: 100581350,
    name: "데자와",
    imageSrc:
      "https://sparcs-newara-dev.s3.amazonaws.com/files/NewAra_Channeltalk.jpg",
    // "https://sparcs-newara-dev.s3.amazonaws.com/files/snowsuno-in-90s.png",
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
  };

  return (
    <ScrollView
      style={[column, bg.gray50, padding.horizontal(safe.horizontal), gap(16)]}
    >
      <View style={[padding.vertical(32)]}>
        <Text style={[text.gray600, text.h2, { lineHeight: 26 * 1.4 }]}>
          <Text style={text.primary}>권순호</Text>님 안녕하세요 👋{"\n"}오늘은
          어떤 음식을 드셨나요?
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate("HomeTab", { screen: "Search" })}
      >
        <View
          style={[
            bg.gray100,
            fill,
            h(46),
            row,
            align.center,
            round.lg,
            padding.horizontal(12),
          ]}
        >
          <TouchableOpacity>
            <Icon.search width={30} height={30} fill={colors.gray400} />
          </TouchableOpacity>
          <Text style={[text.body1, margin.left(8)]}>
            음식 영양성분을 검색해보세요
          </Text>
        </View>
      </TouchableOpacity>

      <View style={[row, align.center, justify.between]}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate("Camera")}>
          <View
            style={[
              column,
              bg.white,
              round.lg,
              { width: 150 },
              { height: 150 },
            ]}
          >
            <View style={[padding.horizontal(8), margin.top(8)]}>
              <Text style={[text.sub1]}>카메라로 검색</Text>
              <Text style={[text.body2]}>바코드, 영양성분표를</Text>
              <Text style={[text.body2]}>찍어보세요</Text>
            </View>
            <View style={[align.end, margin.top(20), margin.right(8)]}>
              <Icon.camera width={50} height={50} fill={colors.primary} />
            </View>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("FoodReview")}
        >
          <View
            style={[
              column,
              bg.white,
              round.lg,
              { width: 150 },
              { height: 150 },
            ]}
          >
            <View style={[padding.horizontal(8), margin.top(8)]}>
              <Text style={[text.sub1]}>포스트 추가</Text>
              <Text style={[text.body2]}>이 음식은 혈당에</Text>
              <Text style={[text.body2]}>어떤 영향을 줬나요?</Text>
            </View>
            <View style={[align.end, margin.top(20), margin.right(8)]}>
              <Icon.sticker width={50} height={50} fill={colors.primary} />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View>
        <Text style={[text.sub1, padding.vertical(8)]}>최근에 먹은 음식</Text>
      </View>
      <ScrollView horizontal={true}>
        <LatestFood imageSrc={data.imageSrc} name={data.name} />
        <LatestFood imageSrc={data.imageSrc} name={data.name} />
        <LatestFood imageSrc={data.imageSrc} name={data.name} />
        <LatestFood imageSrc={data.imageSrc} name={data.name} />
      </ScrollView>
      <View>
        <Text style={[text.sub1, padding.vertical(8)]}>자주 찾아본 음식</Text>
      </View>
      <View style={[column, gap(12)]}>
        <FreqFood
          imageSrc={data.imageSrc}
          name={data.name}
          carb={data.nutrients.carbohydrate}
          protein={data.nutrients.protein}
          fat={data.nutrients.fat}
        />
        <FreqFood
          imageSrc={data.imageSrc}
          name={data.name}
          carb={data.nutrients.carbohydrate}
          protein={data.nutrients.protein}
          fat={data.nutrients.fat}
        />
        <FreqFood
          imageSrc={data.imageSrc}
          name={data.name}
          carb={data.nutrients.carbohydrate}
          protein={data.nutrients.protein}
          fat={data.nutrients.fat}
        />
      </View>
    </ScrollView>
  );
};
