import React, { useContext, useState } from "react";
import { ActivityIndicator, FlatList, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { UploadScreen } from "./Upload";

import { CatsContextType, CatsContext } from "~services/cats/cats.context";

import Error from "~components/Error";

import { CatListItem } from "../components/CatListItem";

import { catsListStyles } from "./CatsList.styles";

export const CatsListScreen: React.FC = () => {
  const { cats, isLoading, error } = useContext<CatsContextType>(CatsContext);

  console.log("catsss", cats);

  return (
    <SafeAreaView style={catsListStyles.container}>
      <Text style={catsListStyles.title}>Icon Cats</Text>
      <UploadScreen />
      {/* TODO: if selected image hide the list to load again */}
      {isLoading ? (
        <ActivityIndicator
          size="large"
          style={catsListStyles.loadingContainer}
        />
      ) : null}
      {error ? (
        <Error message="An error occurred. Please try again later." />
      ) : (
        <FlatList
          contentContainerStyle={{ padding: 24, marginBottom: 90 }}
          data={cats}
          renderItem={({ item }) => <CatListItem item={item} />}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </SafeAreaView>
  );
};
