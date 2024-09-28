import camelize from "camelize";

import {
  ImageDataRequest,
  CatsDataTransformed,
} from "~infrastructure/types/interface";
import Constants from "expo-constants";

const CAT_API_KEY = Constants.expoConfig?.extra?.catApiKey;
const API_URL = Constants.expoConfig?.extra?.apiUrl;

export const uploadImageCatRequest = async (
  url: string
): Promise<ImageDataRequest> => {
  const formData = new FormData();

  formData.append("file", {
    uri: url,
    name: "cat.jpg",
    type: "image/jpeg",
  });

  try {
    const response = await fetch(`${API_URL}images/upload`, {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
        "x-api-key": `${CAT_API_KEY}`,
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Error uploading the image. Try again later!");
    }

    const data: ImageDataRequest = await response.json();
    return data;
  } catch (error) {
    console.log("Error uploading data", error);
    throw error;
  }
};

export const getCatsDataRequest = async (): Promise<ImageDataRequest[]> => {
  try {
    const response = await fetch(
      `${API_URL}images/?limit=20&page=0&order=DESC`,
      {
        method: "GET",
        headers: {
          "x-api-key": `${CAT_API_KEY}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error("Error getting the response");
    }

    const data: ImageDataRequest[] = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const catsDataTransform = (
  results: ImageDataRequest[] = []
): CatsDataTransformed[] => {
  return camelize(results);
};
