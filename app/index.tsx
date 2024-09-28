import React from "react";

import { CatsContextProvider } from "./services/cats/cats.context";
import { CatsListScreen } from "./features/cats/screens/CatsList";
import { FavouritesContextProvider } from "~services/favourites/favourites.context";

export default function Index() {
  return (
    <CatsContextProvider>
      <FavouritesContextProvider>
        <CatsListScreen />
      </FavouritesContextProvider>
    </CatsContextProvider>
  );
}
