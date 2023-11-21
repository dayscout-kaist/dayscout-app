import type { ViewStyle } from "react-native";

/**
 * Applies border radius
 * @example
 * round.md  // Apply 5px radius
 * round.lg  // Apply 10px radius
 */
export const round = {
  sm: { borderRadius: 6 },
  md: { borderRadius: 12 },
  lg: { borderRadius: 18 },
  full: { borderRadius: 1000 },
} as const satisfies Record<string, ViewStyle>;
