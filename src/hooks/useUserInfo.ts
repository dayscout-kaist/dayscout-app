import { useRecoilValue } from "recoil";

import { useQuery } from "@tanstack/react-query";

import { getUserInfo } from "@/api/auth";

import { tokenState } from "./useAuthToken";

export const useUserInfo = () => {
  const token = useRecoilValue(tokenState);

  return useQuery({
    queryKey: ["userInfo", token],
    queryFn: () => getUserInfo(token ?? ""),
    enabled: token !== null,
  });
};
