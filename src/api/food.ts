import { apiClient } from "@/lib/axios";

import type { FoodContentOptional, FoodDetail, FoodInfo } from "@/types/food";

export const searchByText = async (query: string) => {
  const res = await apiClient.get<FoodDetail[]>("/food/search/text", {
    params: { text: query },
  });

  return res.data;
};

export const searchByBarcode = async (code: number) => {
  const res = await apiClient.get<FoodDetail>("/food/search/barcode", {
    params: { barcode_number: code },
  });

  return res.data;
};

export const getFoodDetail = async (foodId: number) => {
  const res = await apiClient.get<FoodDetail>("/food/detail", {
    params: { food_id: foodId },
  });

  return res.data;
};

export const editFood = async () => {
  const res = await apiClient.post<true>("/food/edit");
};
