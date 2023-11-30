import { FoodContentOptional } from "@/types/food";
import { apiClient } from "@/lib/axios";

export const searchByImage = async (
  localImageUri: string,
): Promise<FoodContentOptional> => {
  const formData = new FormData();
  formData.append("file", {
    uri: localImageUri,
    name: "image.jpg",
    type: "image/jpeg",
  } as any);

  const res = await apiClient.post<FoodContentOptional>("/food/ocr", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  return res.data;
};
