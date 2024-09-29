import React, { useContext } from "react";
import {
  ActivityIndicator,
  View,
  StatusBar,
  Animated,
  Text,
} from "react-native";

import { CatsContextType, CatsContext } from "~services/cats/cats.context";

import CustomError from "~components/CustomError";
import { Background } from "~components/Background";

import { CatListItem } from "../components/CatListItem";
import { UploadScreen } from "./Upload";

import { catsListStyles } from "./CatsList.styles";

export const CatsListScreen: React.FC = () => {
  const { cats, isLoading, error } = useContext<CatsContextType>(CatsContext);

  const scrollX = React.useRef(new Animated.Value(0)).current;

  return (
    <View style={catsListStyles.container}>
      <StatusBar hidden />
      <Background cats={cats} scrollX={scrollX} />
      {isLoading ? (
        <ActivityIndicator
          size="large"
          style={catsListStyles.loadingContainer}
        />
      ) : null}
      {error ? (
        <CustomError message="An error occurred. Please try again later." />
      ) : null}

      {!cats.length ? (
        <Text style={catsListStyles.noImages}>
          No cats yet 🐈🐈🐈 Use the + button below to start your collection.
        </Text>
      ) : null}

      <>
        <Animated.FlatList
          data={cats}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            {
              useNativeDriver: true,
            }
          )}
          keyExtractor={(_, index) => index.toString()}
          horizontal
          pagingEnabled
          renderItem={({ item }) => {
            return (
              <View style={catsListStyles.itemContainer}>
                <CatListItem item={item} />
              </View>
            );
          }}
        />
        <UploadScreen />
      </>
    </View>
  );
};
