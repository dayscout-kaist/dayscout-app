import { css } from "@emotion/native";

/**
 * Applies border radius
 * @example
 * round.md  // Apply 5px radius
 * round.lg  // Apply 10px radius
 */
export const round = {
  md: css`
    border-radius: 5px;
  `,
  lg: css`
    border-radius: 10px;
  `,
  xl: css`
    border-radius: 15px;
  `,
  full: css`
    border-radius: 1000px;
  `,
} as const;
