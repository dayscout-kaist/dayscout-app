import type { TextStyle } from "react-native";
import { mapColors, type ColorKeys } from "./color";

type Typography =
  | "title1"
  | "title1Emph"
  | "title2"
  | "title3"
  | "headline"
  | "body"
  | "bodyEmph"
  | "callout"
  | "subhead"
  | "footnote"
  | "caption1"
  | "caption2";

/**
 * Applies typography styles and text color
 * @example
 * text.title1   // Apply title1 typography
 * text.gray300  // Apply gray300 text color
 */
export const text: Record<Typography | ColorKeys, TextStyle> = {
  title1: { fontSize: 28, lineHeight: 34 },
  title1Emph: { fontSize: 28, lineHeight: 34, fontWeight: "700" },
  title2: { fontSize: 22, lineHeight: 28 },
  title3: { fontSize: 20, lineHeight: 25 },
  headline: { fontSize: 17, lineHeight: 22, fontWeight: "600" },
  body: { fontSize: 17, lineHeight: 22 },
  bodyEmph: { fontSize: 17, lineHeight: 22, fontWeight: "600" },
  callout: { fontSize: 16, lineHeight: 21 },
  subhead: { fontSize: 15, lineHeight: 20 },
  footnote: { fontSize: 13, lineHeight: 18 },
  caption1: { fontSize: 12, lineHeight: 16 },
  caption2: { fontSize: 11, lineHeight: 13 },
  ...mapColors((color) => ({ color })),
} as const;
