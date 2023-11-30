import React from "react";
import { SvgProps } from "react-native-svg";

import AddIcon from "./add.svg";
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
import Logo from "./logo.svg";

export const Icon = {
  add: AddIcon,
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
  logo: Logo,
} as const satisfies Record<string, React.FC<SvgProps>>;

export type IconType = keyof typeof Icon;
