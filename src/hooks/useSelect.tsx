import { useOverlay } from "@toss/use-overlay";
import { BottomSheet } from "@/components/BottomSheet";
import { Text } from "react-native";
import { padding, safe, text } from "@/styles";
import React, { useCallback } from "react";
import { OptionRow } from "@/components/BottomSheet";
import { useBottomSheet } from "@/hooks/useBottomSheet";

interface Props<T extends string> {
  title: string;
  options: T[];
  initial: T | null;
}

export const useSelect = <T extends string>({
  title,
  options,
  initial,
}: Props<T>) => {
  const [selected, setSelected] = React.useState<T | null>(initial);

  const openBottomSheet = useBottomSheet<T>(title, resolve =>
    options.map(option => (
      <OptionRow
        key={option}
        value={option}
        onPress={() => resolve(option)}
        selected={option === selected}
      />
    )),
  );

  const open = useCallback(
    () => openBottomSheet().then(setSelected),
    [openBottomSheet, setSelected],
  );

  return { open, selected };
};
