import { apiClient } from "@/lib/axios";

import type { FoodDetail } from "@/types/food";
import { AxiosError } from "axios";

export const searchByText = async (query: string) => {
  try {
    const res = await apiClient.get<FoodDetail[]>("/food/search/byText", {
      params: { text: query },
    });

    return res.data;
  } catch (e) {
    if (e instanceof AxiosError && e.status === 404) return [];
    throw e;
  }
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
