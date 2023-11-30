import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { FormLayout, TextInput } from "@/components";
import type { AuthStackScreenProps } from "@/navigation/types";
import type { TextInputValidator } from "@/types/input";
import { validateDecimalString } from "@/utils/validators";

export const Inbody: React.FC<AuthStackScreenProps<"Inbody">> = ({
  route: { params: navParam },
}) => {
  const navigation = useNavigation();

  const [height, setHeight] = useState<string>(
    navParam.height?.toString() ?? "",
  );
  const [weight, setWeight] = useState<string>(
    navParam.weight?.toString() ?? "",
  );

  const checkInbody: TextInputValidator = val => {
    const regValid = validateDecimalString(val);
    const num = parseFloat(val);
    if (!regValid || num === 0)
      return { valid: false, msg: "0보다 큰 숫자여야 해요!" };
    return { valid: true };
  };

  const isFormValid = checkInbody(height).valid && checkInbody(weight).valid;

  return (
    <FormLayout
      title="신체 정보를 입력하세요"
      onSubmit={() =>
        navigation.navigate("Personal", {
          ...navParam,
          height: parseFloat(height),
          weight: parseFloat(weight),
        })
      }
      isValid={isFormValid}
    >
      <TextInput
        value={height}
        setValue={setHeight}
        isValid={checkInbody}
        title="키"
        unit="cm"
        options={{
          inputMode: "decimal",
          placeholder: "170",
        }}
      />
      <TextInput
        value={weight}
        setValue={setWeight}
        isValid={checkInbody}
        title="몸무게"
        unit="kg"
        options={{
          inputMode: "decimal",
          placeholder: "60",
        }}
      />
    </FormLayout>
  );
};
