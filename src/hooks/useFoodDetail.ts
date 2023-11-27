import { useQuery } from "@tanstack/react-query";
import { getFoodDetail } from "@/api";

export const useFoodDetail = (foodId: number) =>
  useQuery({
    queryKey: ["food", foodId],
    queryFn: () => getFoodDetail(foodId),
  });
