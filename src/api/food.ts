import { apiClient } from "@/lib/axios";

import type { FoodDetail } from "@/types/food";
import { AxiosError } from "axios";

export const searchByText = async (query: string) => {
  const res = await apiClient.get<FoodDetail[]>("/food/search/byText", {
    params: { text: query },
  });

  if (res.data.length === 0) throw new Error("No results found");
  return res.data;
};

export const searchByBarcode = async (barcode: number) => {
  const res = await apiClient.get<FoodDetail>("/food/search/byBarcode", {
    params: { barcode },
  });

  return res.data;
};

export const getFoodDetail = async (foodId: number) => {
  const res = await apiClient.get<FoodDetail>("/food/detail", {
    params: { id: foodId },
  });

  return res.data;
};

export const editFood = async () => {
  const res = await apiClient.post<true>("/food/edit");
};
