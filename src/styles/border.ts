import type { ViewStyle } from "react-native";

import { mapColors } from "./color";

/**
 * Applies border
 * @example
 * border.gray300              // Apply gray300 border
 * [border.gray300, round.md]  // Usage with `round` mixin
 */
export const border = mapColors<ViewStyle>(color => ({
  borderWidth: 1,
  borderColor: color,
}));
