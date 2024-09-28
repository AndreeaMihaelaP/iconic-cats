// Inspiration: https://dribbble.com/shots/14139308-Simple-Scroll-Animation
// Illustrations by: SAMji https://dribbble.com/SAMji_illustrator

import * as React from "react";
import {
  StatusBar,
  FlatList,
  Image,
  Animated,
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { BlurView } from "expo-blur";
import { MaterialIcons } from "@expo/vector-icons";
import { catsListStyles } from "./CatsList.styles";
import HeartLikeV2 from "./Heart";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { CatListItem } from "../components/CatListItem";

const { width, height } = Dimensions.get("screen");

const data = [
  "https://cdn2.thecatapi.com/images/VqrImZd5_.jpg",
  "https://cdn2.thecatapi.com/images/xLkVI9dJ5.jpg",
  "https://cdn2.thecatapi.com/images/ZF1xsNQ8W.jpg",
  "https://cdn2.thecatapi.com/images/8CeMQi4Lf.jpg",
];

const _indicatorSize = 4;
const _spacing = 14;
const _buttonSize = 64;

const imageW = width * 0.7;
const imageH = imageW * 1.54;

export default () => {
  const scrollX = React.useRef(new Animated.Value(0)).current;

  return (
    <View style={{ flex: 1, backgroundColor: "#000" }}>
      <StatusBar hidden />

      <View style={StyleSheet.absoluteFillObject}>
        {data.map((image, index) => {
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
              source={{ uri: image }}
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

      <Animated.FlatList
        data={data}
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
            <View
              style={{
                width,
                alignItems: "center",
                justifyContent: "center",
                shadowColor: "#000",
                shadowRadius: 30,
                shadowOffset: { height: 0, width: 0 },
                shadowOpacity: 0.6,
                elevation: 2,
                marginTop: 20,
              }}>
              <CatListItem item={item} />
            </View>
          );
        }}
      />

      <Pressable
        onPress={() => {}}
        style={{
          position: "absolute",
          bottom: _spacing * 4,
          right: _spacing * 2,
        }}>
        <View
          style={{
            width: _buttonSize,
            height: _buttonSize,
            borderRadius: _buttonSize / 2,
            backgroundColor: "#F85A89",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <MaterialIcons
            name="upload-file"
            size={_buttonSize / 2}
            color="white"
          />
        </View>
      </Pressable>
    </View>
  );
};
