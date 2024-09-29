import React from "react";
import { Text, View, Image } from "react-native";

import { catListItemStyles } from "./CatListItem.styles";
import { CatsDataTransformed } from "~infrastructure/types/interface";
import { Favourite } from "~features/favorites/components/Favorite";
import { Votes } from "./Votes";

const defaultImage = require("../../../infrastructure/assets/content-placeholder.png");

interface CatListItemProps {
  item: CatsDataTransformed;
}

export const CatListItem = ({ item }: CatListItemProps) => {
  return (
    <View style={catListItemStyles.card}>
      <View style={catListItemStyles.cardTop}>
        <Favourite item={item} />

        <Image
          alt="Cat"
          resizeMode="cover"
          defaultSource={defaultImage}
          source={{
            uri: item?.url,
          }}
          style={catListItemStyles.cardImg}
        />
      </View>

      <View style={catListItemStyles.cardBody}>
        <Votes item={item} />
        <Text style={catListItemStyles.cardDescription}>
          Cast your vote!!! Only ONE answer is correct!
          MWAHAHAHAHHAHAHAAHAHAHHAHA
        </Text>
      </View>
    </View>
  );
};
