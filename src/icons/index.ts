import React from "react";
import { SvgProps } from "react-native-svg";

import HomeIcon from "./home.svg";
import LeftIcon from "./left.svg";
import RightIcon from "./right.svg";
import SearchIcon from "./search.svg";
import StickerIcon from "./sticker.svg";
import UserIcon from "./user.svg";
import CameraIcon from "./camera.svg"

export type IconType =
  | "home"
  | "left"
  | "right"
  | "search"
  | "sticker"
  | "camera"
  | "user";

export const Icon = {
  home: HomeIcon,
  left: LeftIcon,
  right: RightIcon,
  search: SearchIcon,
  sticker: StickerIcon,
  user: UserIcon,
  camera: CameraIcon,

} as const satisfies Record<IconType, React.FC<SvgProps>>;
