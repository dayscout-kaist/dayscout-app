// import type { Unit } from "@/types/unit";
import type { Optional } from "@/utils/types";

export interface Nutrients {
  carbohydrate?: number;
  protein?: number;
  fat?: number;
  sugar?: number;
  energy?: number;
}

/**
 * @deprecated
 */
export interface FoodContent {
  totalWeight: number;
  unit: Unit; // DB에서 가져오는 경우에는 항상 AbsoluteUnit
  primaryUnit: "g" | "ml";
  nutrients: {
    energy?: number;
    carbohydrate?: number;
    protein?: number;
    fat?: number;
    sugar?: number;
  };
}

/**
 * @deprecated
 */
export type FoodContentOptional = Optional<
  FoodContent,
  "totalWeight" | "unit" | "primaryUnit"
>;

/**
 * @deprecated
 */
export interface FoodInfo {
  name: string;
  category: string;
  manufacturer: string;
  content: FoodContent;
}

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
  colorBorder?: string;
}

export interface FoodDetail {
  id: number;
  name: string;
  tag?: TagInfo[];
  content: GeneralFoodContent | DistributionFoodContent;
  imageSrc?: string;
}
