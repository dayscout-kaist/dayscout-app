export const colors = {
  white: "#ffffff",
  grayEC: "#ececec",
  grayD4: "#d4d4d4",
  grayC1: "#c1c1c1",
  gray97: "#979797",
  gray6D: "#6d6d6d",
  gray44: "#444444",
  primary: "#F6E24B",
} as const;

type ColorKeys = keyof typeof colors;
export type Color = (typeof colors)[ColorKeys];
export const mapColors = <T>(cb: (color: Color) => T) =>
  Object.fromEntries(
    Object.entries(colors).map(([key, value]) => [key, cb(value)] as const),
  ) as Record<ColorKeys, T>;
