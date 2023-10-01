import { mapColors } from "./color";
import { css } from "@emotion/native";

/**
 * Applies background-color
 * @example
 * bg.gray100  // Apply gray100 background-color
 */
export const bg = mapColors(
  color => css`
    background-color: ${color};
  `,
);
