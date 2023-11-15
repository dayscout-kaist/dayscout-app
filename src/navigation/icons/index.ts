import React from "react";
import { SvgProps } from "react-native-svg";

import HomeIcon from "./home.svg";
import SearchIcon from "./search.svg";
import StickerIcon from "./sticker.svg";
import UserIcon from "./user.svg";

export type IconType = "home" | "search" | "sticker" | "user";

export const Icon = {
  home: HomeIcon,
  search: SearchIcon,
  sticker: StickerIcon,
  user: UserIcon,
} as const satisfies Record<IconType, React.FC<SvgProps>>;
