import { useEffect, useState } from "react";
import { Keyboard } from "react-native";

export const useKeyboardVisibile = (): boolean => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => setIsVisible(true),
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => setIsVisible(false),
    );
    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return isVisible;
};
