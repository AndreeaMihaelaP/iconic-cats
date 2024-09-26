import React, { useState, createContext, useEffect } from "react";

import { getCatsDataRequest, catsDataTransform } from "./cats.service";
import { CatsDataTransformed } from "~infrastructure/types/interface";

export interface CatsContextType {
  cats: CatsDataTransformed[];
  isLoading: boolean;
  error: Error | null;
}

export const CatsContext = createContext<CatsContextType>({
  cats: [],
  isLoading: false,
  error: null,
});

export const CatsContextProvider = ({ children }) => {
  const [cats, setCats] = useState<CatsDataTransformed[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getCats = async () => {
    setIsLoading(true);
    setCats([]);

    try {
      const fetchedCatsImages = await getCatsDataRequest();
      const catsTransformed = await catsDataTransform(fetchedCatsImages);
      setIsLoading(false);
      setCats(catsTransformed);
    } catch (error) {
      setIsLoading(false);
      setError(error);
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
      }}>
      {children}
    </CatsContext.Provider>
  );
};
