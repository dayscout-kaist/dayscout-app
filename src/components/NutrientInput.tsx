import React, { useEffect, useMemo, useState } from "react";
import {
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { useTextInput } from "@/hooks";
import {
  align,
  bg,
  gap,
  h,
  justify,
  padding,
  round,
  row,
  safe,
  text,
  w,
} from "@/styles";

import { BottomSheet } from "./BottomSheet";

const unitRatios = {
  g: 1,
  mg: 0.001,
  스푼: 5,
  컵: 200,
  공기: 200,
} as const satisfies Record<string, number>;

type Unit = keyof typeof unitRatios;

interface Props {
  input: {
    value: string;
    onChangeText: (value: string) => void;
  };
  placeholder?: string;
}

export const NutrientInput: React.FC<Props> = ({ input, placeholder = "" }) => {
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState<Unit>("g");

  const value = useMemo(
    () =>
      parseFloat(
        (parseFloat(input.value) * unitRatios[selectedUnit]).toFixed(4),
      ),
    [input.value, selectedUnit],
  );

  useEffect(() => {
    if (!showKeyboard) Keyboard.dismiss();
  }, [showKeyboard]);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setShowKeyboard(true)}>
        <View
          style={[
            row,
            bg.gray50,
            h(46),
            round.md,
            align.center,
            justify.between,
            padding.horizontal(20),
          ]}
        >
          <Text
            style={[text.body2, isNaN(value) ? text.gray300 : text.gray600]}
          >
            {isNaN(value) ? placeholder : value}
          </Text>
          <Text style={[text.body2, text.gray400]}>g</Text>
        </View>
      </TouchableWithoutFeedback>

      <BottomSheet
        delayClose
        open={showKeyboard}
        onClose={() => setShowKeyboard(false)}
        viewStyle={gap(8)}
      >
        <View style={padding.horizontal(safe.horizontal)}>
          <View style={[row, gap(12), padding.top(4)]}>
            {Object.keys(unitRatios).map(unit => (
              <TouchableWithoutFeedback
                key={unit}
                onPress={() => setSelectedUnit(unit as Unit)}
              >
                <View
                  style={[
                    h(40),
                    padding.horizontal(8),
                    round.md,
                    unit === selectedUnit ? bg.primary : bg.gray100,
                  ]}
                >
                  <Text
                    style={[
                      padding(10),
                      text.btn2,
                      unit === selectedUnit ? text.white : text.gray500,
                    ]}
                  >
                    {unit}
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            ))}
          </View>

          <View style={[row, align.center, gap(2), h(64)]}>
            <TextInput
              autoFocus
              autoCorrect={false}
              keyboardType="numeric"
              placeholder="얼마나 입력할까요?"
              style={[
                text.h3,
                text.gray600,
                h(64),
                w("fill"),
                { position: "absolute" },
              ]}
              onBlur={() => setShowKeyboard(false)}
              {...input}
            />
            {!!input.value && (
              <Text style={[text.h3, text.gray600]}>
                {input.value} {selectedUnit}
                <Text style={text.gray200}>&nbsp;= {value}g</Text>
              </Text>
            )}
          </View>
        </View>
        <TouchableOpacity onPress={() => setShowKeyboard(false)}>
          <View style={[bg.primary, h(60), align.center, justify.center]}>
            <Text style={[text.btn1, text.white]}>확인</Text>
          </View>
        </TouchableOpacity>
      </BottomSheet>
    </>
  );
};
