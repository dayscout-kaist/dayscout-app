import { useOverlay } from "@toss/use-overlay";
import React, { type ReactNode, useCallback } from "react";
import { BottomSheet } from "@/components/BottomSheet";
import { padding, safe, text } from "@/styles";
import { Text } from "react-native";

type Resolver<T> = (value: T) => void;

export const useBottomSheet = <T,>(
  title: string,
  content: (resolve: Resolver<T>) => ReactNode,
) => {
  const overlay = useOverlay();

  return useCallback(
    () =>
      new Promise<T>(resolve =>
        overlay.open(({ isOpen, close }) => {
          const resolveAndClose = (value: T) => {
            resolve(value);
            close();
          };

          return (
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
              {content(resolveAndClose)}
            </BottomSheet>
          );
        }),
      ),
    [title, content, overlay],
  );
};
