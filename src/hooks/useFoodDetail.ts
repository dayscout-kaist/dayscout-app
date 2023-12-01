import { useQuery } from "@tanstack/react-query";
import { getFoodDetail } from "@/api";

export const useFoodDetail = (foodId: number | undefined) =>
  useQuery({
    queryKey: ["food", foodId],
    queryFn: () => getFoodDetail(foodId || -1),
    enabled: !!foodId,
  });
