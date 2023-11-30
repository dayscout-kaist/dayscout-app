export const genderMap = {
  남자: "male",
  여자: "female",
  기타: "other",
} as const;

export type GenderTxt = keyof typeof genderMap;
export type Gender = (typeof genderMap)[GenderTxt];

export interface RegisterInfo {
  email?: string;
  password?: string;
  nickname?: string;
  height?: number;
  weight?: number;
  birth?: string;
  gender?: GenderTxt;
}

export interface User {
  id: number;
  email: string;
  username: string;
  height: number;
  weight: number;
  birth: string | null;
  gender: "male" | "female" | "other";
  token: string;
}
