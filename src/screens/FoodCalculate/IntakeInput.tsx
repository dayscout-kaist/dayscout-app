import React, { useState, useRef, useEffect } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { DeprecatedBottomSheet, NutrientInput } from "@/components";
import { TextInput } from "react-native-gesture-handler";

import {
  align,
  bg,
  colors,
  gap,
  margin,
  padding,
  round,
  row,
  safe,
  text,
} from "@/styles";
import { Icon } from "@/icons";
import { useNavigation } from "@react-navigation/native";
import { ProductWithDetails } from "@/types/product";

export const IntakeInput: React.FC<{ variant: number }> = ({ variant }) => {
  const [inputValue, setInputValue] = useState("");
  const [isVariant1, setIsVariant1] = useState(variant === 1);
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const toggleVariant = () => {
    setIsVariant1(prevState => !prevState);
  };

  const buttonTitles = ["반의 반", "반", "전체"];

  useEffect(() => {
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        bottomSheetRef.current?.close();
      },
    );

    return () => {
      keyboardDidHideListener.remove();
    };
  }, []);

  const handleButtonPress = (title: React.SetStateAction<string>) => {
    setInputValue(title);
    bottomSheetRef.current?.close();
  };

  const handleTextInputPress = () => {
    bottomSheetRef.current?.present();
    bottomSheetRef.current?.expand();
  };

  return (
    // <KeyboardAvoidingView
    //   behavior={Platform.OS === "ios" ? "padding" : "height"}
    //   style={{ flex: 1, justifyContent: "flex-end" }}
    // >
    <View style={[padding.top(20), bg.white]}>
      <View style={[gap(13), padding.horizontal(safe.horizontal)]}>
        <View style={[gap(8), { flex: 1 }]}>
          <TouchableOpacity onPress={toggleVariant}>
            <View style={[row, gap(8)]}>
              <Text style={[text.h3, text.gray600, { flex: 1 }]}>
                섭취량 입력하기
              </Text>
              {isVariant1 && (
                <Icon.up_wide width={30} height={30} fill={colors.gray500} />
              )}
              {!isVariant1 && (
                <Icon.down_wide width={30} height={30} fill={colors.gray500} />
              )}
            </View>
          </TouchableOpacity>
          {!isVariant1 && (
            <View style={[gap(18)]}>
              <NutrientInput placeholder="섭취량을 입력하세요" />

              <View style={[row, gap(12), margin.bottom(10)]}>
                {buttonTitles.map((title, index) => (
                  <TouchableOpacity
                    key={index}
                    style={{ flex: 1 }}
                    onPress={() => handleButtonPress(title)}
                  >
                    <View
                      style={[
                        { backgroundColor: "rgba(235, 161, 42, 0.20)" },
                        padding.vertical(12),
                        align.center,
                        round.md,
                      ]}
                    >
                      <Text style={[text.primary, text.btn2]}>{title}</Text>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          )}
        </View>
        <View style={[bg.gray50, { height: 1 }]} />
      </View>
      <DeprecatedBottomSheet ref={bottomSheetRef}>
        <Text style={[text.h3, text.gray600]}>영양성분 기준</Text>
      </DeprecatedBottomSheet>
    </View>
    // </KeyboardAvoidingView>
  );
};
