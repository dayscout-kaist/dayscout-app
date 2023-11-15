import React from "react";
import type { ColorValue } from "react-native";

import { Icon } from "./icons";

export const HeaderBackImage =
  (color: ColorValue): React.FC<{ tintColor: string }> =>
  () =>
    <Icon.left width={30} height={30} fill={color} />;
