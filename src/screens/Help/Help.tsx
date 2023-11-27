import React from "react";
import { Button, ScrollView, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { HelpComp } from "./HelpComp";

export const Help: React.FC = () => {
  const navigation = useNavigation();

  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{ flex: 1 }}
      contentContainerStyle={{ justifyContent: "center", alignItems: "center" }}
    >
      <HelpComp
        imageSrc="https://sparcs-newara-dev.s3.amazonaws.com/files/NewAra_Channeltalk.jpg"
        name="검색창과 카메라로 
        음식 영양성분을 찾아요"
        contents="검색창을 이용해 음식 이름으로
        영양성분을 찾아요"
      ></HelpComp>
      <HelpComp
        imageSrc="https://sparcs-newara-dev.s3.amazonaws.com/files/NewAra_Channeltalk.jpg"
        name="검색창과 카메라로 
        음식 영양성분을 찾아요"
        contents="음식의 바코드를 찍어 빠르게 검색해요
        영양성분표를 찍어 
        바로 입력할 수도 있어요"
      ></HelpComp>
      <HelpComp
        imageSrc="https://sparcs-newara-dev.s3.amazonaws.com/files/NewAra_Channeltalk.jpg"
        name="잘못된 정보가 있다면 수정해요"
        contents="실제와 다른 영양성분 정보를 수정해 
        더 정확한 DayScout을 함께 만들어요"
      ></HelpComp>
      <HelpComp
        imageSrc="https://sparcs-newara-dev.s3.amazonaws.com/files/NewAra_Channeltalk.jpg"
        name="먹은 음식에 포스트를 남겨요"
        contents="음식을 먹은 후기,
        이 음식을 먹을 때 혈당 관리 팁 등
        음식에 관해 공유하고 싶은 정보를
        자유롭게 남겨요"
      ></HelpComp>
      <HelpComp
        imageSrc="https://sparcs-newara-dev.s3.amazonaws.com/files/NewAra_Channeltalk.jpg"
        name="혈당 변화는 어땠는지
        태그로 공유해요"
        contents="혈당이 급격히 올랐다면 
        “혈당 스파이크”
        혈당 조절이 잘 되었다면 
        “혈당이 잘 잡히는 음식”"
      ></HelpComp>
    </ScrollView>
  );
};
