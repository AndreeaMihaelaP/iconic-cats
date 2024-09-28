import Constants from "expo-constants";
import { CatsDataTransformed } from "~infrastructure/types/interface";

const CAT_API_KEY = Constants.expoConfig?.extra?.catApiKey;
const API_URL = Constants.expoConfig?.extra?.apiUrl;

interface UploadResponse {
  message: string;
  id: number;
}

export const getFavoritesRequest = async (): Promise<CatsDataTransformed[]> => {
  try {
    const response = await fetch(`${API_URL}favourites`, {
      method: "GET",
      headers: {
        "x-api-key": `${CAT_API_KEY}`,
      },
    });

    if (!response.ok) {
      throw new Error("Error to GET favorites!");
    }

    const data: CatsDataTransformed[] = await response.json();
    return data;
  } catch (error) {
    console.log("Error to GET the favorites", error);
    throw error;
  }
};

export const addImageToFavoritesRequest = async (imageId: string) => {
  console.log("image if", imageId);
  const rawBody = JSON.stringify({
    image_id: imageId,
  });

  try {
    const response = await fetch(`${API_URL}favourites`, {
      method: "POST",
      headers: {
        "x-api-key": `${CAT_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: rawBody,
    });

    if (!response.ok) {
      throw new Error("Error to add the image to the favorites!");
    }

    const data: UploadResponse = await response.json();
    console.log("data", data);
    return data;
  } catch (error) {
    console.log("Error to add the image to the favorites", error);
    throw error;
  }
};

export const removeImageToFavoritesRequest = async (imageId: string) => {
  try {
    const response = await fetch(`${API_URL}favourites/${imageId}`, {
      method: "DELETE",
      headers: {
        "x-api-key": `${CAT_API_KEY}`,
      },
    });

    if (!response.ok) {
      throw new Error("Error to delete from favorite!");
    }

    const data: UploadResponse = await response.json();
    return data;
  } catch (error) {
    console.log("Error to delete the image from favorites", error);
    throw error;
  }
};
