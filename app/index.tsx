import React from "react";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { CatsContextProvider } from "./services/cats/cats.context";
import { CatsListScreen } from "./features/cats/screens/CatsList";
import Scroll from "./features/cats/screens/Scroll";

export default function Index() {
  return (
    <Scroll />
    // <View>
    //   {/* <CatsContextProvider> */}
    //   <Scroll />
    //   {/* </CatsContextProvider>
    //   <StatusBar style="auto" /> */}
    // </View>
  );
}
