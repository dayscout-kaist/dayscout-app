export type Gender = "M" | "F";

export interface RegisterInfo {
  email?: string;
  password?: string;
  nickname?: string;
  height?: number;
  weight?: number;
  birth?: string;
  gender?: Gender;
}
