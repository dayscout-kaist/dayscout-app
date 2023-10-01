import { FlexStyle } from "react-native";

export const column: FlexStyle = {
  display: "flex",
  flexDirection: "column",
};

export const row: FlexStyle = {
  display: "flex",
  flexDirection: "row",
};

export const center: FlexStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

type Justify = "start" | "center" | "end" | "between" | "around";
export const justify: Record<Justify, FlexStyle> = {
  start: { justifyContent: "flex-start" },
  center: { justifyContent: "center" },
  end: { justifyContent: "flex-end" },
  between: { justifyContent: "space-between" },
  around: { justifyContent: "space-around" },
} as const;

type Align = "start" | "center" | "end" | "stretch";
export const align: Record<Align, FlexStyle> = {
  start: { alignItems: "flex-start" },
  center: { alignItems: "center" },
  end: { alignItems: "flex-end" },
  stretch: { alignItems: "stretch" },
} as const;

/**
 * Applies flexbox with column direction
 * @example
 * gap(10) // Apply 10px gap
 */
export const gap = (value: number): FlexStyle => ({ gap: value });
