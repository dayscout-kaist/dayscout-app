export type Gender = "남자" | "여자" | "기타";

export interface RegisterInfo {
  email?: string;
  password?: string;
  nickname?: string;
  height?: number;
  weight?: number;
  birth?: string;
  gender?: Gender;
}
