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

export const justify = {
  start: { justifyContent: "flex-start" },
  center: { justifyContent: "center" },
  end: { justifyContent: "flex-end" },
  between: { justifyContent: "space-between" },
  around: { justifyContent: "space-around" },
} as const satisfies Record<string, FlexStyle>;

export const align = {
  start: { alignItems: "flex-start" },
  center: { alignItems: "center" },
  end: { alignItems: "flex-end" },
  stretch: { alignItems: "stretch" },
  baseline: { alignItems: "baseline" },
} as const satisfies Record<string, FlexStyle>;

/**
 * Applies flexbox with column direction
 * @example
 * gap(10) // Apply 10px gap
 */
export const gap = (value: number): FlexStyle => ({ gap: value });

export const fill = { flex: 1 } as const satisfies FlexStyle;
