import type { Unit } from "@/types/unit";
import type { Optional } from "@/utils/types";

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

export type FoodContentOptional = Optional<FoodContent, "totalWeight" | "unit" | "primaryUnit">;

export interface FoodInfo {
  name: string;
  category: string;
  manufacturer: string;
  content: FoodContent;
}
