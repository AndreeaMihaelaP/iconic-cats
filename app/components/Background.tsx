import React, { useContext, useState } from "react";
import { View, Animated, Dimensions, StyleSheet } from "react-native";
import { CatsDataTransformed } from "~infrastructure/types/interface";

interface BackgroundProps {
  cats: CatsDataTransformed[];
  scrollX: any;
}

export const Background = ({ cats, scrollX }: BackgroundProps) => {
  const { width, height } = Dimensions.get("screen");

  return (
    <View style={StyleSheet.absoluteFillObject}>
      {cats.map((image: { url: string }, index: number) => {
        const inputRange = [
          (index - 1) * width,
          index * width,
          (index + 1) * width,
        ];
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0, 1, 0],
        });
        return (
          <Animated.Image
            key={`image-bg-${index}`}
            source={{ uri: image.url }}
            style={[
              StyleSheet.absoluteFillObject,
              {
                width,
                height,
                resizeMode: "cover",
                opacity,
              },
            ]}
            blurRadius={60}
          />
        );
      })}
    </View>
  );
};
