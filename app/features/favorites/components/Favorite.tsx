import React, { useContext } from "react";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

import { FavouritesContext } from "~services/favourites/favourites.context";
import { CatsDataTransformed } from "~infrastructure/types/interface";
import { colors } from "~infrastructure/theme/colors";

const FavouriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 9;
`;

interface FavouriteProps {
  item: CatsDataTransformed;
}

export const Favourite = ({ item }: FavouriteProps) => {
  const { favourites, addToFavourites, removeFromFavourites } =
    useContext(FavouritesContext);

  const favourite = favourites.find((fav) => fav.image.id === item.id);

  return (
    <FavouriteButton
      onPress={() =>
        !favourite ? addToFavourites(item) : removeFromFavourites(favourite)
      }>
      <AntDesign
        name={favourite ? "heart" : "hearto"}
        size={30}
        color={favourite ? colors.pink : "white"}
      />
    </FavouriteButton>
  );
};
