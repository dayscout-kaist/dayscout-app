import { apiClient } from "@/lib/axios";
import type { Tag } from "@/types/tag";

export const getTags = async () => {
  const res = await apiClient.get<Tag[]>("/tag/search/all");

  return res.data;
};
