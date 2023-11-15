import type { TextStyle } from "react-native";
import { mapColors } from "./color";

/**
 * Applies typography styles and text color
 * @example
 * text.title1   // Apply title1 typography
 * text.gray300  // Apply gray300 text color
 */
export const text = {
  title1: { fontSize: 24, fontFamily: "Pretendard-Bold" },
  title2: { fontSize: 22, fontFamily: "Pretendard-Bold" },
  body: { fontSize: 18, fontFamily: "Pretendard-Medium" },
  tag: { fontSize: 16, fontFamily: "Pretendard-SemiBold" },
  button: { fontSize: 20, fontFamily: "Pretendard-Bold" },
  bottomNav: {
    fontSize: 12,
    lineHeight: 12,
    fontFamily: "Pretendard-SemiBold",
  },
  ...mapColors((color) => ({ color })),
} as const satisfies Record<string, TextStyle>;
