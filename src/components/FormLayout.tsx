import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from "react-native";

import { useKeyboardVisibile } from "@/hooks";
import { fill, gap, margin, padding, safe, text } from "@/styles";

import { Button } from "./Button";

export const FormLayout: React.FC<{
  children: React.ReactNode;
  title: string;
  onSubmit: () => void;
  isValid?: boolean;
}> = ({ title, children, onSubmit, isValid }) => {
  const isKeyboardVisible = useKeyboardVisibile();

  return (
    <View style={fill}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView>
          <View
            style={[
              gap(20),
              margin.bottom(64 + safe.bottom),
              padding.top(12),
              padding.horizontal(safe.horizontal),
            ]}
          >
            <Text style={[text.h3, text.gray600]}>{title}</Text>
            {children}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <Button
        title="다음"
        onPress={onSubmit}
        variant="primary"
        stick={isKeyboardVisible ? "keyboard" : "bottom"}
        disabled={!isValid}
      />
    </View>
  );
};
