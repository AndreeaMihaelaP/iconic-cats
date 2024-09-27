import React from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import { colors } from "~infrastructure/theme/colors";
import styled from "styled-components/native";

import { catListItemStyles } from "./CatListItem.styles";
import HeartLikeV2 from "../screens/Heart";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultImage = require("../../../infrastructure/assets/content-placeholder.png");

const FavouriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 30px;
  right: 15px;
  z-index: 19;
`;

export const CatListItem = ({ item }) => {
  // const { url = "", title, isPathway, duration, description } = item;
  console.log("ietm", item);
  return (
    <View>
      <TouchableOpacity>
        <View style={catListItemStyles.card}>
          <View style={catListItemStyles.cardTop}>
            <FavouriteButton onPress={() => {}}>
              {/* <Icon name="heart" size={30} color="white" /> */}
              <HeartLikeV2 />
            </FavouriteButton>

            <Image
              alt="Cat"
              resizeMode="cover"
              defaultSource={defaultImage}
              source={{
                uri: "https://cdn2.thecatapi.com/images/VqrImZd5_.jpg",
              }}
              style={catListItemStyles.cardImg}
            />
          </View>

          <View style={catListItemStyles.cardBody}>
            <Text style={catListItemStyles.cardTitle}>
              Vote for me!!!! There is only one right answer
            </Text>
            <View style={catListItemStyles.cardHeader}>
              <View style={catListItemStyles.subHeaderItem}>
                <AntDesignIcon
                  name="like1"
                  size={40}
                  color={colors.dark_gray}
                />
              </View>
              <View style={catListItemStyles.subHeaderItem}>
                <Text style={catListItemStyles.cardTitle}>
                  CAT POWER SCORE: 1110
                </Text>
              </View>
              <View style={catListItemStyles.subHeaderItem}>
                <AntDesignIcon
                  name="dislike1"
                  size={20}
                  color={colors.dark_gray}
                />
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
