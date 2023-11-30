import { useState } from "react";

export const useTextInput = (initialValue?: string) => {
  const [value, setValue] = useState<string>(initialValue ?? "");

  return {
    value,
    onChangeText: setValue,
  };
};
