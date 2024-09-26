import React from "react";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { CatsContextProvider } from "./services/cats/cats.context";
import { CatsListScreen } from "./features/cats/screens/CatsList";

export default function Index() {
  return (
    <View>
      <CatsContextProvider>
        <CatsListScreen />
      </CatsContextProvider>
      <StatusBar style="auto" />
    </View>
  );
}
