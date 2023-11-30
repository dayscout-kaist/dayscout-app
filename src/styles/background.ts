import type { ViewStyle } from "react-native";

import { mapColors } from "./color";

/**
 * Applies background-color
 * @example
 * bg.gray100  // Apply gray100 background-color
 */
export const bg = mapColors<ViewStyle>(color => ({ backgroundColor: color }));
