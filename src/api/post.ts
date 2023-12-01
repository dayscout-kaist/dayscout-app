import { apiClient } from "@/lib/axios";
import type { Post, PostRes } from "@/types/post";

export const getPostsByDate = async (
  date: string,
  token: string,
): Promise<Post[]> => {
  const res = await apiClient.post<PostRes[]>("/review/search/byDay", {
    datestr: date,
    token,
  });

  return res.data.map(el => ({ ...el, name: "식품명", intake: 420 }));
};
