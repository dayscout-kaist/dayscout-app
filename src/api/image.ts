import axios from "axios/index";

interface ImageSearchResult {
  // TODO
}

export const searchByImage = async (localImageUri: string) => {
  const formData = new FormData();
  formData.append("file", {
    uri: localImageUri,
    name: "image.jpg",
    type: "image/jpeg"
  } as any);

  return await axios.post<ImageSearchResult>(
    "http://172.30.1.34:8000/nutrition-facts-image", formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
};
