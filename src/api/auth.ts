import { apiClient } from "@/lib/axios";
import {
  genderMap,
  type GenderTxt,
  type RegisterInfo,
  type User,
} from "@/types/auth";

export const register = async (info: RegisterInfo) => {
  const res = await apiClient.post<User>("/auth/register", {
    email: info.email,
    password: info.password,
    username: info.nickname,
    height: info.height,
    weight: info.weight,
    brith: info.birth,
    gender: genderMap[info.gender as GenderTxt],
  });

  return res.data;
};

export const getUserInfo = async (token: string) => {
  const res = await apiClient.post<User>("/auth/", { token });

  return res.data;
};
