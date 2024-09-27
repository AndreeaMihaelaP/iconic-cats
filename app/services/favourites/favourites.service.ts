import camelize from "camelize";
import { LearningTypes } from "../../infrastructure/types/enums";

import {
  ImageDataRequest,
  CatsDataTransformed,
} from "../../infrastructure/types/interface";

const CAT_API_KEY =
  "live_QCGCfufAhs7kj2iWCxUEyRVITTkk91tDv0N9Sbm7ENZhZ7vVVZgTEAmNyoT9Sd5S";

export const uploadImageCatRequest = async (): Promise<ImageDataRequest> => {
  const formData = new FormData();
  // formData.append("file", {
  //   uri: selectedImage,
  // });

  try {
    const response = await fetch("https://api.thecatapi.com/v1/images/upload", {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
        "x-api-key": CAT_API_KEY, // Pass the API key in the header
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Error uploading the image");
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
      "https://api.thecatapi.com/v1/images/?limit=10&page=0&order=DESC",
      {
        method: "GET",
        headers: {
          "Content-Type": "multipart/form-data",
          "x-api-key": CAT_API_KEY, // Pass the API key in the header
        },
      }
    );
    if (!response.ok) {
      throw new Error("Error getting the response");
    }

    const data: ImageDataRequest[] = await response.json();
    return data;
  } catch (error) {
    console.log("Error fetching data", error);
    throw error;
  }
};

export const catsDataTransform = (
  results: ImageDataRequest[] = []
): CatsDataTransformed[] => {
  const mappedResults = results.map((item) => {
    return { ...item };
  });
  return camelize(mappedResults);
};
