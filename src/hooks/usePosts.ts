import { useRecoilValue } from "recoil";

import { useQuery } from "@tanstack/react-query";

import { getPostsByDate } from "@/api/post";

import { tokenState } from "./useAuthToken";

export const usePosts = (date: string) => {
  const token = useRecoilValue(tokenState);

  return useQuery({
    queryKey: ["postDate"],
    queryFn: () => getPostsByDate(date, token ?? ""),
  });
};
