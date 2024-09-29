import React, { useState, createContext, useEffect } from "react";

import {
  getCatsDataRequest,
  catsDataTransform,
  uploadImageCatRequest,
} from "./cats.service";
import { CatsDataTransformed } from "~infrastructure/types/interface";

export interface CatsContextType {
  cats: CatsDataTransformed[];
  isLoading: boolean;
  error: Error | null;
  uploadStatus: string;
  uploadCatImage: (selectedImage: string) => void;
}

export const CatsContext = createContext<CatsContextType>({
  cats: [],
  isLoading: false,
  error: null,
  uploadStatus: "",
  uploadCatImage: () => {},
});

interface CatsContextProviderProps {
  children: any;
}

export const CatsContextProvider = ({ children }: CatsContextProviderProps) => {
  const [cats, setCats] = useState<CatsDataTransformed[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");

  const getCats = async () => {
    setIsLoading(true);

    try {
      const fetchedCatsImages = await getCatsDataRequest();
      const catsTransformed = await catsDataTransform(fetchedCatsImages);
      setIsLoading(false);
      setCats(catsTransformed);
    } catch (error) {
      setIsLoading(false);
      setError(error as any);
    }
  };

  const uploadCatImage = async (selectedImage: string) => {
    setIsLoading(true);

    try {
      const uploadCatImageResponse = await uploadImageCatRequest(selectedImage);

      if (uploadCatImageResponse) {
        getCats();
      }
    } catch (error) {
      setIsLoading(false);
      setUploadStatus(error?.message);
    }
  };

  useEffect(() => {
    getCats();
  }, []);

  return (
    <CatsContext.Provider
      value={{
        cats,
        isLoading,
        error,
        uploadCatImage: uploadCatImage,
        uploadStatus,
      }}>
      {children}
    </CatsContext.Provider>
  );
};
