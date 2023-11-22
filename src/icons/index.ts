import React from "react";
import { SvgProps } from "react-native-svg";

import CheckIcon from "./check.svg";
import DownIcon from "./down.svg";
import HomeIcon from "./home.svg";
import LeftIcon from "./left.svg";
import RightIcon from "./right.svg";
import SearchIcon from "./search.svg";
import StickerIcon from "./sticker.svg";
import UserIcon from "./user.svg";
import UpWideIcon from "./up_wide.svg";
import DownWideIcon from "./down_wide.svg";
import CameraIcon from "./camera.svg";

export type IconType =
  | "check"
  | "down"
  | "home"
  | "left"
  | "right"
  | "search"
  | "sticker"
  | "user"
  | "up_wide"
  | "down_wide"
  | "camera";

export const Icon = {
  check: CheckIcon,
  down: DownIcon,
  home: HomeIcon,
  left: LeftIcon,
  right: RightIcon,
  search: SearchIcon,
  sticker: StickerIcon,
  user: UserIcon,
  up_wide: UpWideIcon,
  down_wide: DownWideIcon,
  camera: CameraIcon,

} as const satisfies Record<IconType, React.FC<SvgProps>>;
