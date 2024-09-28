import React, { useState, createContext, useEffect } from "react";
import {
  addImageToFavoritesRequest,
  getFavoritesRequest,
  removeImageToFavoritesRequest,
} from "./favourites.service";
import { CatsDataTransformed } from "~infrastructure/types/interface";
import { catsDataTransform } from "~services/cats/cats.service";

export interface FavouritesContextType {
  favourites: CatsDataTransformed[];
  addToFavourites: (item: CatsDataTransformed) => void;
  removeFromFavourites: (item: CatsDataTransformed) => void;
}

export const FavouritesContext = createContext<FavouritesContextType>({
  favourites: [],
  addToFavourites: () => {},
  removeFromFavourites: () => {},
});

export const FavouritesContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState<CatsDataTransformed[]>([]);

  const loadFavourites = async () => {
    setFavourites([]);

    try {
      const fetchedImages = await getFavoritesRequest();
      const catsTransformed = await catsDataTransform(fetchedImages);

      setFavourites(catsTransformed);
    } catch (error) {}
  };

  const add = async (item: CatsDataTransformed) => {
    try {
      console.log("item iddddd", item);
      const response = await addImageToFavoritesRequest(item.id);
      loadFavourites();
      console.log("response", response);
    } catch (e) {
      console.log("error storing", e);
    }
  };

  const remove = async (item: CatsDataTransformed) => {
    try {
      const response = await removeImageToFavoritesRequest(item.id);
      loadFavourites();
      console.log("response", response);
    } catch (e) {
      console.log("error storing", e);
    }
  };

  useEffect(() => {
    console.log("heeeeeey loadFAV");
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
