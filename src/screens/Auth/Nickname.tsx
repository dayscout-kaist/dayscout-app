import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { FormLayout, TextInput } from "@/components";
import type { AuthStackScreenProps } from "@/navigation/types";
import type { TextInputValidator } from "@/types/input";
import { validateNickname } from "@/utils/validators";

export const Nickname: React.FC<AuthStackScreenProps<"Nickname">> = ({
  navigation,
  route: { params: navParam },
}) => {
  const [nickname, setNickname] = useState<string>("");

  const checkNickname: TextInputValidator = val => {
    const regValid = validateNickname(val);
    if (!regValid)
      return {
        valid: false,
        msg: "한글/영문으로 2~16자 사이어야 해요!",
      };
    // TODO: Call API to check if nickname is already being used
    return { valid: true };
  };

  const isFormValid = checkNickname(nickname).valid;

  return (
    <FormLayout
      title="사용하실 별명을 입력하세요"
      onSubmit={() => navigation.navigate("Inbody", { ...navParam, nickname })}
      isValid={isFormValid}
    >
      <TextInput
        value={nickname}
        setValue={setNickname}
        isValid={checkNickname}
        options={{
          autoComplete: "nickname", // Works on iOS only
          placeholder: "넙죽이",
        }}
      />
    </FormLayout>
  );
};
