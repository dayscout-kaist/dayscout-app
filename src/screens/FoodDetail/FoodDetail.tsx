import React, { useCallback, useMemo, useRef, useState } from "react";
import { Button, ScrollView, TouchableOpacity, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import BottomSheet from '@gorhom/bottom-sheet';

import { BottomButton } from "@/components";
import { align, bg, colors, column, fill, gap, padding, safe, text } from "@/styles";
import type { ProductWithDetails } from "@/types/product";

import { BasicInfo } from "./BasicInfo";
import { Post } from "./Post";
import { NutritionFacts } from "./NutritionFacts";
import { DetailInfo } from "./DetailInfo";

export const FoodDetail: React.FC = () => {
  const navigation = useNavigation();

  const data: ProductWithDetails = {
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
  };

  const bottomSheetRef = useRef<BottomSheet>(null);
  const [selectedWeight, setSelectedWeight] = useState<number>(100);
  const bottomSheetHeight = 150; // Set the absolute height for the bottom sheet
  const snapPoints = useMemo(() => [bottomSheetHeight], [bottomSheetHeight]);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const handlePresentModalPress = useCallback(() => {
    setIsBottomSheetOpen(true); // BottomSheet 열림 상태로 설정
    bottomSheetRef.current?.expand();
  }, []);

  // BottomSheet 닫힘 상태 관리
  const handleClose = useCallback(() => {
    setIsBottomSheetOpen(false); // BottomSheet 닫힘 상태로 설정
  }, []);

  // bottom sheet content
  const renderBottomSheetContent = useCallback(() => {
    // Assuming these are the serving sizes you want to display
    // const servingSizes = [100, '총 내용량', '단위 제공량'];
    const servingSizes = [100, '총 내용량 당'];

    const handleSelectServingSize = (size: string | number) => {
      // Here you can handle the logic to update the selected size
      setSelectedWeight(size === 100? 100: data.totalWeight?data.totalWeight:100); // Update the selected weight state
      // Trigger some action like an API call here if needed
      bottomSheetRef.current?.close();
    };

    return (
      <View style={[padding.horizontal(safe.horizontal),{borderRadius:100}]}>
        <Text style={[text.body1]}>영양성분 기준</Text>
        {servingSizes.map((size, index) => (
          <TouchableOpacity
            key={index}
            style={[padding.vertical(10)]}
            onPress={() => handleSelectServingSize(size)}
          >
            <Text>{size === 100? '100g 당':'총 내용량 당'}</Text>
          </TouchableOpacity>

        ))}
      </View>
    );
  }, []);

  return (
    <View style={fill}>
      <ScrollView>
        <View style={[column, gap(12)]}>
          <BasicInfo
            name={data.displayName}
            category={data.smallCategory}
            imgSrc={data.imageSrc}
            tags={[
              { title: "추정치", bg: "#ffe5c3", txt: "#ff980f" },
              { title: "1,000회 이상 추가됨", bg: "#fdbec1", txt: "#eb2a2a" },
            ]}
            description="여기에 어떤 내용이 들어가는 것이 좋을까요"
          />
          <Post
            count={7}
            avatarSrc="https://sparcs-newara-dev.s3.amazonaws.com/files/NewAra_Channeltalk.jpg"
            review="맛은 있는데 혈당이 많이 올라요 어쩌구 저쩌구 개발 보름 남았다 파이팅~ 라이라이 차차차 라이 차차차"
            onPress={() => navigation.navigate("FoodReview")}
          />
          <NutritionFacts />
          {/* <DetailInfo
            largeTag={data.largeCategory}
            totalWeight={data.totalWeight ?? 100}
            carbohydrate={data.nutrients.carbohydrate ?? null}
            sugar={data.nutrients.sugar ?? null}
            protein={data.nutrients.protein ?? null}
            fat={data.nutrients.fat ?? null}
            onServingSizePress={handlePresentModalPress}
            selectedWeight={selectedWeight}
          /> */}
          <View style={{ height: 192 }} />
        </View>
      </ScrollView>
      <BottomButton
        title="영양성분 계산하기"
        onPress={() => navigation.navigate("FoodCalculate")}
        style="primary"
      />
      {isBottomSheetOpen && (
        <View style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)'
        }} />
      )}
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        backgroundStyle={bg.white}
        handleIndicatorStyle={bg.gray200}
        enablePanDownToClose={true}
        onClose={handleClose}
      >
        {renderBottomSheetContent()}
      </BottomSheet>
    </View>
  );
};
