import React, { useRef, useState } from "react";
import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { BottomSheetModal } from "@gorhom/bottom-sheet";

import {
  BottomSheet,
  FormLayout,
  OptionRow,
  OptionSelect,
  TextInput,
} from "@/components";
import type { AuthStackScreenProps } from "@/navigation/types";
import { text } from "@/styles";
import type { Gender } from "@/types/auth";
import type { TextInputValidator } from "@/types/input";
import { validateBirth } from "@/utils/validators";

const genders = { M: "남자", F: "여자" } as const satisfies Record<
  Gender,
  string
>;

export const Personal: React.FC<AuthStackScreenProps<"Personal">> = ({
  route: { params: navParam },
}) => {
  const navigation = useNavigation();
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const [birth, setBirth] = useState<string>(navParam.birth ?? "");
  const [gender, setGender] = useState<"M" | "F" | undefined>(navParam.gender);

  const checkBirth: TextInputValidator = val => {
    if (val.length !== 8)
      return { valid: false, msg: "생년월일 8자리를 입력해 주세요!" };
    const valid = validateBirth(val);
    if (valid) return { valid };
    return { valid, msg: "올바르지 않은 날짜예요!" };
  };

  const isFormValid = checkBirth(birth).valid && gender !== undefined;

  return (
    <>
      <FormLayout
        title="생일과 성별을 입력하세요"
        onSubmit={() =>
          navigation.navigate("Greet", {
            ...navParam,
            birth,
            gender,
          })
        }
        isValid={isFormValid}
      >
        <TextInput
          value={birth}
          setValue={setBirth}
          isValid={checkBirth}
          title="생년월일"
          options={{
            autoComplete: "birthdate-full", // Works on Android only
            inputMode: "numeric",
            placeholder: "YYYYMMDD",
            maxLength: 8,
          }}
        />
        <OptionSelect
          value={gender && genders[gender]}
          title="성별"
          placeholder="성별을 선택하세요"
          onPress={() => {
            bottomSheetRef.current?.present();
            bottomSheetRef.current?.expand();
          }}
        />
      </FormLayout>
      <BottomSheet ref={bottomSheetRef}>
        <Text style={[text.h3, text.gray600]}>성별을 선택하세요</Text>
        {Object.entries(genders).map(([key, txt]) => (
          <OptionRow
            key={key}
            value={txt}
            onPress={() => {
              setGender(key as keyof typeof genders);
              bottomSheetRef.current?.close();
            }}
            selected={key === gender}
          />
        ))}
      </BottomSheet>
    </>
  );
};
