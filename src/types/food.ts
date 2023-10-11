import type { Unit } from "@/types/unit";

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

export interface FoodInfo {
  name: string;
  category: string;
  manufacturer: string;
  content: FoodContent;
}

export type Res = FoodInfo[];
