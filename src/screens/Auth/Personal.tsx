import React, { useState } from "react";

import { FormLayout, OptionSelect, TextInput } from "@/components";
import type { AuthStackScreenProps } from "@/navigation/types";
import type { Gender } from "@/types/auth";
import type { TextInputValidator } from "@/types/input";
import { validateBirth } from "@/utils/validators";
import { useSelectBottomSheet } from "@/utils/useSelectBottomSheet";

export const Personal: React.FC<AuthStackScreenProps<"Personal">> = ({
  navigation,
  route: { params: prevParams },
}) => {
  const [birth, setBirth] = useState<string>("");

  const [gender, setGender] = useState<Gender | null>(null);

  const { open } = useSelectBottomSheet<Gender>({
    title: "성별을 선택하세요",
    options: ["남자", "여자", "기타"],
    selected: gender,
  });

  const checkBirth: TextInputValidator = val => {
    if (val.length !== 8)
      return { valid: false, msg: "생년월일 8자리를 입력해 주세요!" };
    const valid = validateBirth(val);
    if (valid) return { valid };
    return { valid, msg: "올바르지 않은 날짜예요!" };
  };

  const isFormValid = checkBirth(birth).valid && !!gender;

  return (
    <>
      <FormLayout
        title="생일과 성별을 입력하세요"
        onSubmit={() =>
          isFormValid &&
          navigation.navigate("Greet", {
            ...prevParams,
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
          value={gender}
          title="성별"
          placeholder="성별을 선택하세요"
          onPress={open}
        />
      </FormLayout>
    </>
  );
};
