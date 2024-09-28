import Constants from "expo-constants";
import { CatsDataTransformed } from "~infrastructure/types/interface";

const CAT_API_KEY = Constants.expoConfig?.extra?.catApiKey;
const API_URL = Constants.expoConfig?.extra?.apiUrl;

interface VoteResponse {
  image_id: string;
  sub_id?: string;
  value: number;
}

export const getVotesRequest = async (): Promise<CatsDataTransformed[]> => {
  try {
    const response = await fetch(`${API_URL}votes`, {
      method: "GET",
      headers: {
        "x-api-key": `${CAT_API_KEY}`,
      },
    });

    if (!response.ok) {
      throw new Error("Error to GET votes!");
    }

    const data: CatsDataTransformed[] = await response.json();
    return data;
  } catch (error) {
    console.log("Error to GET the votes", error);
    throw error;
  }
};

export const votingRequest = async (imageId: string, value: number) => {
  const rawBody = JSON.stringify({
    image_id: imageId,
    value: value,
  });

  console.log("helloooo");
  try {
    const response = await fetch(`${API_URL}votes`, {
      method: "POST",
      headers: {
        "x-api-key": `${CAT_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: rawBody,
    });

    if (!response.ok) {
      throw new Error("Error to vote!");
    }

    const data: VoteResponse = await response.json();
    return data;
  } catch (error) {
    console.log("Error to vote", error);
    throw error;
  }
};
