// import type { Unit } from "@/types/unit";
import type { Optional } from "@/utils/types";
import * as stream from "stream";

export interface Nutrients {
  carbohydrate?: number;
  protein?: number;
  fat?: number;
  sugar?: number;
  energy?: number;
}

export type FoodType = "general" | "distribution";
export type Unit = "absolute" | "total" | "single";

export interface BaseFoodContent {
  totalWeight: number;
  unit: Unit;
  representName?: string;
  className?: string;
  primaryUnit: "g" | "ml";
  nutrients: Nutrients;
  suggestedNutrients?: Nutrients;
}

export interface GeneralFoodContent extends BaseFoodContent {
  type: "general";
  originalNutrients: Nutrients;
}

export interface DistributionFoodContent extends BaseFoodContent {
  type: "distribution";
  manufacturer?: string;
  suggestedNutrients?: Nutrients;
}

export interface TagInfo {
  id: number;
  name: string;
  colorBackground?: string;
  /**
   * @deprecated
   */
  colorBorder?: string;
}

export interface Food {
  id: number;
  name: string;
  representName: string;
  className: string;
  type: FoodType;
  tag: TagInfo[];
  imageSrc?: string;
}

export interface FoodDetail {
  id: number;
  name: string;
  tag: TagInfo[];
  content: GeneralFoodContent | DistributionFoodContent;
  imageSrc?: string;
}
