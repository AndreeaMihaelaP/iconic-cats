import React from "react";

import { CatsContextProvider } from "./services/cats/cats.context";
import { CatsListScreen } from "./features/cats/screens/CatsList";
import Scroll from "~features/cats/screens/Scroll";

export default function Index() {
  return (
    <CatsContextProvider>
      <CatsListScreen />
    </CatsContextProvider>
  );
}
