import { useOverlay } from "@toss/use-overlay";
import { BottomSheet } from "@/components/BottomSheet";
import { Text } from "react-native";
import { padding, safe, text } from "@/styles";
import React, { useCallback } from "react";
import { OptionRow } from "@/components/BottomSheet";

interface Props<T extends string> {
  title: string;
  options: T[];
  selected: T | null;
}

export const useSelectBottomSheet = <T extends string>({
  title,
  options,
  selected,
}: Props<T>) => {
  const overlay = useOverlay();

  const open = useCallback(
    () =>
      new Promise<T>(resolve =>
        overlay.open(({ isOpen, close }) => (
          <BottomSheet
            backdrop
            open={isOpen}
            onClose={close}
            viewStyle={[
              padding.top(12),
              padding.horizontal(safe.horizontal),
              padding.bottom(safe.bottom),
            ]}
          >
            <Text style={[text.h3, text.gray600]}>{title}</Text>
            {options.map(option => (
              <OptionRow
                key={option}
                value={option}
                onPress={() => {
                  resolve(option);
                  close();
                }}
                selected={option === selected}
              />
            ))}
          </BottomSheet>
        )),
      ),
    [title, options, selected, overlay],
  );

  return { open };
};
