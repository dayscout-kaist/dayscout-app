import { useOverlay } from "@toss/use-overlay";
import { BottomSheet } from "@/components/BottomSheet";
import { Text } from "react-native";
import { padding, safe, text } from "@/styles";
import { ServingSizeRow } from "@/screens/FoodDetail/NutritionFacts";
import React from "react";

interface Props<T extends string> {
  title: string;
  options: T[];
  selected: T;
}

export const useSelectBottomSheet = <T extends string>({
  title,
  options,
  selected,
}: Props<T>) => {
  const overlay = useOverlay();

  const open = () =>
    new Promise<T>(resolve =>
      overlay.open(({ isOpen, close }) => (
        <BottomSheet
          backdrop
          open={isOpen}
          onClose={close}
          viewStyle={[
            padding.horizontal(safe.horizontal),
            padding.bottom(safe.bottom),
          ]}
        >
          <Text style={[text.h3, text.gray600]}>{title}</Text>
          {options.map(option => (
            <ServingSizeRow
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
    );

  return { open };
};
