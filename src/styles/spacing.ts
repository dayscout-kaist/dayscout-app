import type { DimensionValue, FlexStyle } from "react-native";

const style =
  (attribute: keyof FlexStyle) =>
  (value: DimensionValue): FlexStyle => ({ [attribute]: value });

const applyPrefix = (prefix: "padding" | "margin") =>
  Object.assign(style(prefix), {
    top: style(`${prefix}Top`),
    bottom: style(`${prefix}Bottom`),
    left: style(`${prefix}Left`),
    right: style(`${prefix}Right`),
    vertical: style(`${prefix}Vertical`),
    horizontal: style(`${prefix}Horizontal`),
  });

/**
 * @example
 * padding(10)            // 10px padding for all sides
 * padding.top(5)         // 5px padding for top
 * padding.horizontal(8)  // 8px padding for left and right
 */
export const padding = applyPrefix("padding");

/**
 * @example
 * margin(10)            // 10px margin for all sides
 * margin.top(5)         // 5px margin for top
 * margin.horizontal(8)  // 8px margin for left and right
 */
export const margin = applyPrefix("margin");

export const safe = {
  horizontal: 24,
  bottom: 34,
} as const satisfies Record<string, DimensionValue>;

export const inline = padding.horizontal(safe.horizontal);
