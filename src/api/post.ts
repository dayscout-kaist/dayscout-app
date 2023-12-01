import { apiClient } from "@/lib/axios";
import type { Post, PostRes } from "@/types/post";

const names = [
  "데자와",
  "우리밀 호박약과",
  "제주말차 초코 밀크티",
  "프로틴 쉐이크 카카오",
  "브리에뜨 둘세 데 레체",
] as const;

const intakes = [120, 30, 230, 240, 180] as const;

export const getPostsByDate = async (
  date: string,
  token: string,
): Promise<Post[]> => {
  const res = await apiClient.post<PostRes[]>("/review/search/byDay", {
    datestr: date,
    token,
  });

  return res.data.map((el, idx) => ({
    ...el,
    name: names[idx],
    intake: intakes[idx],
  }));
};

export const getPostsByFoodId = async (foodId: number): Promise<PostRes[]> => {
  const res = await apiClient.get<PostRes[]>("/review/search/byFoodId", {
    params: { id: foodId },
  });

  return res.data;
};
