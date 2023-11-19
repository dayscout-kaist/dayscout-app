import type { TextStyle } from "react-native";
import { mapColors } from "./color";

/**
 * Applies typography styles and text color
 * @example
 * text.h1   // Apply h1 typography
 * text.gray300  // Apply gray300 text color
 */
export const text = {
  h1: { fontSize: 30, fontFamily: "Pretendard-Bold" },
  h2: { fontSize: 26, fontFamily: "Pretendard-Bold" },
  h3: { fontSize: 22, fontFamily: "Pretendard-Bold" },
  sub1: { fontSize: 20, fontFamily: "Pretendard-SemiBold" },
  sub2: { fontSize: 18, fontFamily: "Pretendard-SemiBold" },
  body1: {
    fontSize: 18,
    fontFamily: "Pretendard-Medium",
    lineHeight: 26,
    letterSpacing: -0.15,
  },
  body2: {
    fontSize: 16,
    fontFamily: "Pretendard-Medium",
    lineHeight: 22,
    letterSpacing: -0.1,
  },
  btn1: { fontSize: 20, fontFamily: "Pretendard-Bold" },
  btn2: { fontSize: 16, fontFamily: "Pretendard-SemiBold" },
  bottomNav: {
    fontSize: 12,
    lineHeight: 12,
    fontFamily: "Pretendard-SemiBold",
  },
  ...mapColors(color => ({ color })),
} as const satisfies Record<string, TextStyle>;
