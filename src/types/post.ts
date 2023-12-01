import { Nutrients } from "./food";

export interface PostRes {
  id: number;
  content: string;
  nutrients: Nutrients;
  tags: number[];
  createdAt: string;
  userId: number;
  foodId?: number;
}

export interface Post extends PostRes {
  name: string;
  intake: number;
}
