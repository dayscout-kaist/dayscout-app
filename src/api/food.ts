import { apiClient } from "@/lib/axios";

import type { FoodContentOptional, FoodInfo } from "@/types/food";

export const searchByText = async (query: string): Promise<FoodInfo[]> => {
  const res = await apiClient.get<FoodInfo[]>(
    "/food/search",
    { params: { query } }
  );

  return res.data;
};

export const searchByBarcode = async (code: string): Promise<FoodInfo[]> => {
  const res = await apiClient.get<FoodInfo[]>(
    "/food/search/barcode",
    { params: { code } }
  );

  return res.data;
};

export const searchByImage = async (localImageUri: string): Promise<FoodContentOptional> => {
  const formData = new FormData();
  formData.append("file", {
    uri: localImageUri,
    name: "image.jpg",
    type: "image/jpeg"
  } as any);

  const res = await apiClient.post<FoodContentOptional>(
    "/food/ocr",
    formData,
    { headers: { "Content-Type": "multipart/form-data" } }
  );

  return res.data;
};
