import { getPostsByFoodId } from "@/api/post";
import { useQuery } from "@tanstack/react-query";

export const useFoodPosts = (foodId: number) =>
  useQuery({
    queryKey: ["foodPost", foodId],
    queryFn: () => getPostsByFoodId(foodId),
  });
