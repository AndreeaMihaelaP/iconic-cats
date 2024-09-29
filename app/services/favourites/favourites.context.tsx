import React, { ReactNode, useState, createContext, useEffect } from "react";
import {
  ImageResponse,
  addImageToFavoritesRequest,
  getFavoritesRequest,
  removeImageToFavoritesRequest,
} from "./favourites.service";
import { CatsDataTransformed } from "~infrastructure/types/interface";

export interface FavouritesContextType {
  favourites: ImageResponse[];
  addToFavourites: (item: CatsDataTransformed) => void;
  removeFromFavourites: (item: ImageResponse) => void;
}

interface FavouritesContextProviderProps {
  children: ReactNode;
}

export const FavouritesContext = createContext<FavouritesContextType>({
  favourites: [],
  addToFavourites: () => {},
  removeFromFavourites: () => {},
});

export const FavouritesContextProvider = ({
  children,
}: FavouritesContextProviderProps) => {
  const [favourites, setFavourites] = useState<ImageResponse[]>([]);

  const loadFavourites = async () => {
    setFavourites([]);

    try {
      const fetchedImages = await getFavoritesRequest();
      setFavourites(fetchedImages);
    } catch (error) {}
  };

  const add = async (item: CatsDataTransformed) => {
    try {
      const response = await addImageToFavoritesRequest(item.id);
      loadFavourites();
    } catch (e) {
      console.log("error storing", e);
    }
  };

  const remove = async (item: ImageResponse) => {
    try {
      const response = await removeImageToFavoritesRequest(item.id);
      loadFavourites();
      console.log("response", response);
    } catch (e) {
      console.log("error storing", e);
    }
  };

  useEffect(() => {
    loadFavourites();
  }, []);

  return (
    <FavouritesContext.Provider
      value={{
        favourites,
        addToFavourites: add,
        removeFromFavourites: remove,
      }}>
      {children}
    </FavouritesContext.Provider>
  );
};
