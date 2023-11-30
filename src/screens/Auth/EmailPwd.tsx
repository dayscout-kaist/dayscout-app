import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { FormLayout, TextInput } from "@/components";
import type { AuthStackScreenProps } from "@/navigation/types";
import type { TextInputValidator } from "@/types/input";
import { validateEmail } from "@/utils/validators";

export const EmailPwd: React.FC<AuthStackScreenProps<"EmailPwd">> = ({
  route: { params: navParam },
}) => {
  const navigation = useNavigation();

  const [email, setEmail] = useState<string>(navParam.email ?? "");
  const [password, setPassword] = useState<string>(navParam.password ?? "");
  const [password2nd, setPassword2nd] = useState<string>(
    navParam.password ?? "",
  );

  const checkEmail: TextInputValidator = val => {
    const valid = validateEmail(val);
    if (valid) return { valid };
    return { valid, msg: "사용할 수 없는 이메일이에요!" };
  };
  const checkPassword: TextInputValidator = val => {
    if (val.length >= 6) return { valid: true };
    return {
      valid: false,
      msg: "비밀번호는 6자리 이상이어야 해요!",
    };
  };
  const checkPassword2nd: TextInputValidator = val => {
    if (val === password) return { valid: true };
    return { valid: false, msg: "비밀번호가 달라요!" };
  };

  const isFormValid =
    checkEmail(email).valid &&
    checkPassword(password).valid &&
    checkPassword2nd(password2nd).valid;

  return (
    <FormLayout
      title="회원 정보를 입력하세요"
      onSubmit={() =>
        navigation.navigate("Nickname", { ...navParam, email, password })
      }
      isValid={isFormValid}
    >
      <TextInput
        value={email}
        setValue={setEmail}
        isValid={checkEmail}
        title="이메일"
        options={{
          autoComplete: "email",
          inputMode: "email",
          placeholder: "example@gmail.com",
        }}
      />
      <TextInput
        value={password}
        setValue={setPassword}
        isValid={checkPassword}
        title="비밀번호"
        options={{
          autoComplete: "new-password",
          placeholder: "******",
          secureTextEntry: true,
        }}
      />
      <TextInput
        value={password2nd}
        setValue={setPassword2nd}
        isValid={checkPassword2nd}
        title="비밀번호 확인"
        options={{
          placeholder: "******",
          secureTextEntry: true,
        }}
      />
    </FormLayout>
  );
};
