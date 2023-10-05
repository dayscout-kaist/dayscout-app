import type { Unit } from "@/types/unit";

export interface FoodInfo {
  name: string;
  totalWeight: number;
  unit: Unit;
  nutrients: {
    carbohydrate: number;
    protein: number;
    fat: number;
  }
}
