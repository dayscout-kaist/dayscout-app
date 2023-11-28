import React from "react";
import { SvgProps } from "react-native-svg";

import CameraIcon from "./camera.svg";
import CheckIcon from "./check.svg";
import DownWideIcon from "./down_wide.svg";
import DownIcon from "./down.svg";
import HomeIcon from "./home.svg";
import LeftIcon from "./left.svg";
import RightIcon from "./right.svg";
import SearchIcon from "./search.svg";
import StickerIcon from "./sticker.svg";
import UpWideIcon from "./up_wide.svg";
import UserIcon from "./user.svg";

export type IconType =
  | "camera"
  | "check"
  | "down_wide"
  | "down"
  | "home"
  | "left"
  | "right"
  | "search"
  | "sticker"
  | "up_wide"
  | "user";

export const Icon = {
  camera: CameraIcon,
  check: CheckIcon,
  down_wide: DownWideIcon,
  down: DownIcon,
  home: HomeIcon,
  left: LeftIcon,
  right: RightIcon,
  search: SearchIcon,
  sticker: StickerIcon,
  up_wide: UpWideIcon,
  user: UserIcon,
} as const satisfies Record<IconType, React.FC<SvgProps>>;
